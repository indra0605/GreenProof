import { ContractState } from "@midnight-ntwrk/compact-runtime";
import * as GreenProof from "@contract/managed/green-proof/contract/index.js";

import {
  GREEN_PROOF_CONTRACT_ADDRESS,
  GREEN_PROOF_INDEXER_URI,
} from "./contract-config";
import { fromHex, toHex } from "./midnight";

export type LiveBatch = {
  id: string;
  productHash: string;
  metadataHash: string;
  requirementBps: bigint;
  status: GreenProof.BatchStatus;
  verificationCount: bigint;
  latestVerification?: {
    labId: bigint;
    evidenceCommitment: string;
    inspectedAt: bigint;
    validUntil: bigint;
    revoked: boolean;
  };
};

export type LiveLab = {
  id: bigint;
  operatorKey: string;
  metadataHash: string;
  active: boolean;
  revision: bigint;
};

export type LiveLedger = {
  address: string;
  paused: boolean;
  totalBatches: bigint;
  totalLabs: bigint;
  totalVerifications: bigint;
  batches: LiveBatch[];
  labs: LiveLab[];
};

async function fetchState(address: string): Promise<ContractState> {
  const response = await fetch(GREEN_PROOF_INDEXER_URI, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: "query($address: HexEncoded!) { contractAction(address: $address) { state } }",
      variables: { address },
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Indexer HTTP error: ${response.status}`);
  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error: { message: string }) => error.message).join("; "));
  }
  const state = payload.data?.contractAction?.state;
  if (!state) throw new Error("Contract state not indexed yet.");
  return ContractState.deserialize(fromHex(state));
}

export async function fetchLiveLedger(
  address: string = GREEN_PROOF_CONTRACT_ADDRESS,
): Promise<LiveLedger> {
  const ledger = GreenProof.ledger((await fetchState(address)).data);
  return {
    address,
    paused: ledger.paused,
    totalBatches: ledger.totalBatches,
    totalLabs: ledger.totalLabs,
    totalVerifications: ledger.totalVerifications,
    batches: [...ledger.batches].map(([id, batch]) => {
      const verificationMap = ledger.verifications.member(id) ? ledger.verifications.lookup(id) : null;
      const latest = verificationMap && batch.verificationCount > 0n && verificationMap.member(batch.verificationCount)
        ? verificationMap.lookup(batch.verificationCount)
        : undefined;
      return {
        id: toHex(id),
        productHash: toHex(batch.productHash),
        metadataHash: toHex(batch.metadataHash),
        requirementBps: batch.requirementBps,
        status: batch.status,
        verificationCount: batch.verificationCount,
        latestVerification: latest && { labId: latest.labId, evidenceCommitment: toHex(latest.evidenceCommitment), inspectedAt: latest.inspectedAt, validUntil: latest.validUntil, revoked: latest.revoked },
      };
    }),
    labs: [...ledger.labs].map(([id, lab]) => ({
      id,
      operatorKey: toHex(lab.operatorKey),
      metadataHash: toHex(lab.metadataHash),
      active: lab.active,
      revision: lab.revision,
    })),
  };
}
