export const GREEN_PROOF_NETWORK = "preprod" as const;

export const GREEN_PROOF_INDEXER_URI =
  "https://indexer.preprod.midnight.network/api/v4/graphql";
export const GREEN_PROOF_INDEXER_WS_URI =
  "wss://indexer.preprod.midnight.network/api/v4/graphql/ws";

export const GREEN_PROOF_CONTRACT_ADDRESS =
  "8d6bcd216001340daa7af70b7bf868ac5446cf179074b3bd49298242bf9270b9" as const;

export const GREEN_PROOF_CONTRACT_SHORT =
  `${GREEN_PROOF_CONTRACT_ADDRESS.slice(0, 10)}…${GREEN_PROOF_CONTRACT_ADDRESS.slice(-8)}`;

export function greenProofQrPayload(batchId: string): string {
  return JSON.stringify({
    network: GREEN_PROOF_NETWORK,
    contractAddress: GREEN_PROOF_CONTRACT_ADDRESS,
    batchId,
  });
}
