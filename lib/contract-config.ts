export const GREEN_PROOF_NETWORK = "preprod" as const;

export const GREEN_PROOF_CONTRACT_ADDRESS =
  "985167313b70cfd68728877192cf4b63afc5e4994834d942096e87f3dc6cf3a4" as const;

export const GREEN_PROOF_CONTRACT_SHORT =
  `${GREEN_PROOF_CONTRACT_ADDRESS.slice(0, 10)}…${GREEN_PROOF_CONTRACT_ADDRESS.slice(-8)}`;

export function greenProofQrPayload(batchId: string): string {
  return JSON.stringify({
    network: GREEN_PROOF_NETWORK,
    contractAddress: GREEN_PROOF_CONTRACT_ADDRESS,
    batchId,
  });
}
