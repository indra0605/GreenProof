import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import {
  Contract,
  pureCircuits,
} from "../src/managed/green-proof/contract/index.js";
import {
  witnesses,
  type GreenProofPrivateState,
} from "../src/witnesses.js";

const bytes = (seed: number): Uint8Array =>
  Uint8Array.from({ length: 32 }, (_, index) => (seed + index) % 256);

const witnessContext = (privateState: GreenProofPrivateState) =>
  ({ privateState } as Parameters<typeof witnesses.callerSecret>[0]);

describe("Green Proof identity and privacy boundaries", () => {
  it("keeps the deployable operation set within the preprod block budget", () => {
    const contract = new Contract(witnesses);

    expect(Object.keys(contract.provableCircuits).sort()).toEqual([
      "manageAdmin",
      "manageBatch",
      "manageLab",
      "revokeBatch",
      "verifyBatch",
    ]);
  });

  it("derives deterministic, domain-separated role identities", () => {
    const secret = bytes(7);

    const admin = pureCircuits.deriveAdminKey(secret);
    const supplier = pureCircuits.deriveSupplierKey(secret);
    const lab = pureCircuits.deriveLabOperatorKey(secret);

    expect(pureCircuits.deriveAdminKey(secret)).toEqual(admin);
    expect(admin).not.toEqual(supplier);
    expect(admin).not.toEqual(lab);
    expect(supplier).not.toEqual(lab);
  });

  it("rejects malformed caller secrets before proof generation", () => {
    const state: GreenProofPrivateState = { callerSecret: new Uint8Array(31) };

    expect(() => witnesses.callerSecret(witnessContext(state))).toThrow(
      "callerSecret must be exactly 32 bytes",
    );
  });

  it("rejects missing or out-of-range private evidence", () => {
    const missing: GreenProofPrivateState = { callerSecret: bytes(1) };
    expect(() =>
      witnesses.verificationEvidence(
        witnessContext(missing) as Parameters<
          typeof witnesses.verificationEvidence
        >[0],
      ),
    ).toThrow("pendingEvidence is required for verifyBatch");

    const invalid = {
      callerSecret: bytes(1),
      pendingEvidence: {
        actualBps: 10_001n,
        labId: 1n,
        inspectedAt: 1n,
        validUntil: 2n,
        commitmentNonce: bytes(2),
        signature: { announcement: { x: 1n, y: 2n }, response: 3n },
      },
    } satisfies GreenProofPrivateState;

    expect(() =>
      witnesses.verificationEvidence(
        witnessContext(invalid) as Parameters<
          typeof witnesses.verificationEvidence
        >[0],
      ),
    ).toThrow("actualBps must be between 0 and 10000");
  });

  it("accepts evidence at the exact percentage and lab boundaries", () => {
    for (const actualBps of [0n, 10_000n]) {
      for (const labId of [1n, 65_535n]) {
        const privateState: GreenProofPrivateState = {
          callerSecret: bytes(1),
          pendingEvidence: {
            actualBps,
            labId,
            inspectedAt: 1n,
            validUntil: 2n,
            commitmentNonce: bytes(2),
            signature: { announcement: { x: 1n, y: 2n }, response: 3n },
          },
        };

        expect(witnesses.verificationEvidence(witnessContext(privateState))[1]).toEqual(
          privateState.pendingEvidence,
        );
      }
    }
  });

  it("rejects malformed evidence nonces and lab identifiers", () => {
    const base = {
      callerSecret: bytes(1),
      pendingEvidence: {
        actualBps: 5_000n,
        labId: 1n,
        inspectedAt: 1n,
        validUntil: 2n,
        commitmentNonce: bytes(2),
        signature: { announcement: { x: 1n, y: 2n }, response: 3n },
      },
    } satisfies GreenProofPrivateState;

    expect(() => witnesses.verificationEvidence(witnessContext({
      ...base,
      pendingEvidence: { ...base.pendingEvidence, commitmentNonce: new Uint8Array(31) },
    }))).toThrow("commitmentNonce must be exactly 32 bytes");

    expect(() => witnesses.verificationEvidence(witnessContext({
      ...base,
      pendingEvidence: { ...base.pendingEvidence, labId: 0n },
    }))).toThrow("labId must be between 1 and 65535");

    expect(() => witnesses.verificationEvidence(witnessContext({
      ...base,
      pendingEvidence: { ...base.pendingEvidence, labId: 65_536n },
    }))).toThrow("labId must be between 1 and 65535");
  });

  it("splits Schnorr challenge into reversible high and low limbs", () => {
    const challenge = (1n << 250n) + 123_456n;
    const [, [high, low]] = witnesses.getSchnorrReduction(
      witnessContext({ callerSecret: bytes(1) }),
      challenge,
    );

    const limbBase = 1n << 248n;
    expect(high * limbBase + low).toBe(challenge);
    expect(low).toBeLessThan(limbBase);
  });

  it("keeps exact percentage out of exported ledger declarations", () => {
    const contractPath = fileURLToPath(
      new URL("../src/green-proof.compact", import.meta.url),
    );
    const source = readFileSync(contractPath, "utf8");
    const ledgerDeclarations = [...source.matchAll(/export ledger ([^;]+);/g)].map(
      ([, declaration]) => declaration,
    );

    expect(ledgerDeclarations.join("\n")).not.toContain("actualBps");
    expect(source).toContain("Schnorr_schnorrVerify<4>");
    expect(source).toContain("usedEvidence.member(publicCommitment)");
    expect(source).toContain("kernel.blockTimeLessThan");
  });
});
