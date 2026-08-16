import type { WitnessContext } from "@midnight-ntwrk/midnight-js-protocol/compact-runtime";

import type {
  Ledger,
  Schnorr_SchnorrSignature,
} from "./managed/green-proof/contract/index.js";

export type VerificationEvidence = {
  actualBps: bigint;
  labId: bigint;
  inspectedAt: bigint;
  validUntil: bigint;
  commitmentNonce: Uint8Array;
  signature: Schnorr_SchnorrSignature;
};

export type GreenProofPrivateState = {
  callerSecret: Uint8Array;
  pendingEvidence?: VerificationEvidence;
};

const TWO_248 =
  452312848583266388373324160190187140051835877600158453279131187530910662656n;

const require32Bytes = (value: Uint8Array, name: string): Uint8Array => {
  if (!(value instanceof Uint8Array) || value.length !== 32) {
    throw new Error(`${name} must be exactly 32 bytes`);
  }
  return value;
};

export const witnesses = {
  callerSecret: ({
    privateState,
  }: WitnessContext<Ledger, GreenProofPrivateState>): [
    GreenProofPrivateState,
    Uint8Array,
  ] => [
    privateState,
    require32Bytes(privateState.callerSecret, "callerSecret"),
  ],

  verificationEvidence: ({
    privateState,
  }: WitnessContext<Ledger, GreenProofPrivateState>): [
    GreenProofPrivateState,
    VerificationEvidence,
  ] => {
    const evidence = privateState.pendingEvidence;
    if (!evidence) {
      throw new Error("pendingEvidence is required for verifyBatch");
    }
    require32Bytes(evidence.commitmentNonce, "commitmentNonce");
    if (evidence.actualBps < 0n || evidence.actualBps > 10_000n) {
      throw new Error("actualBps must be between 0 and 10000");
    }
    if (evidence.labId <= 0n || evidence.labId > 65_535n) {
      throw new Error("labId must be between 1 and 65535");
    }
    return [privateState, evidence];
  },

  getSchnorrReduction: ({
    privateState,
  }: WitnessContext<Ledger, GreenProofPrivateState>, challengeHash: bigint): [
    GreenProofPrivateState,
    [bigint, bigint],
  ] => [
    privateState,
    [challengeHash / TWO_248, challengeHash % TWO_248],
  ],
};
