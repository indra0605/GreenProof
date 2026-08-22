"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ContractState } from "@midnight-ntwrk/compact-runtime";
import { LedgerParameters, ZswapChainState } from "@midnight-ntwrk/ledger-v8";
import { FetchZkConfigProvider } from "@midnight-ntwrk/midnight-js-fetch-zk-config-provider";
import { indexerPublicDataProvider } from "@midnight-ntwrk/midnight-js-indexer-public-data-provider";
import { setNetworkId } from "@midnight-ntwrk/midnight-js-network-id";
import type { MidnightProvider, WalletProvider } from "@midnight-ntwrk/midnight-js-types";

import { GREEN_PROOF_NETWORK } from "./contract-config";

export const MIDNIGHT_NETWORK = GREEN_PROOF_NETWORK;

export function selectPreprodNetwork(): void {
  setNetworkId(MIDNIGHT_NETWORK);
}

export function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function fromHex(hex: string): Uint8Array {
  const normalized = hex.startsWith("0x") ? hex.slice(2) : hex;
  if (normalized.length % 2 !== 0) throw new Error("Invalid hex string from wallet.");
  const bytes = new Uint8Array(normalized.length / 2);
  for (let index = 0; index < normalized.length; index += 2) {
    bytes[index / 2] = Number.parseInt(normalized.slice(index, index + 2), 16);
  }
  return bytes;
}

type WalletApi = {
  getConfiguration(): Promise<any>;
  getUnshieldedAddress(): Promise<any>;
  getShieldedAddresses(): Promise<any>;
  getProvingProvider(provider: any): Promise<any>;
  balanceUnsealedTransaction(tx: string): Promise<any>;
  submitTransaction(tx: string): Promise<any>;
};

type OneAmWallet = {
  name?: string;
  rdns?: string;
  apiVersion?: string;
  connect(network: typeof MIDNIGHT_NETWORK): Promise<WalletApi>;
};

declare global {
  interface Window {
    midnight?: Record<string, unknown> & Partial<OneAmWallet>;
  }
}

export type ConnectedSession = {
  api: WalletApi;
  config: any;
  providers: {
    privateStateProvider: ReturnType<typeof createPrivateStateProvider>;
    publicDataProvider: ReturnType<typeof createPatchedPublicDataProvider>;
    zkConfigProvider: FetchZkConfigProvider<any>;
    proofProvider: { proveTx(unprovenTx: any): Promise<any> };
    walletProvider: WalletProvider;
    midnightProvider: MidnightProvider;
  };
  unshieldedAddress: string;
};

export function detectOneAmWallet(): Promise<OneAmWallet | null> {
  selectPreprodNetwork();
  return new Promise((resolve) => {
    let attempts = 0;
    const check = () => {
      const injected = window.midnight;
      const candidates = injected
        ? [injected, injected["1am"], ...Object.values(injected)].filter(
            (entry): entry is OneAmWallet =>
              typeof entry === "object" && entry !== null && typeof (entry as OneAmWallet).connect === "function",
          )
        : [];
      const wallet = candidates.find((candidate) => {
        const identity = `${candidate.name ?? ""} ${candidate.rdns ?? ""}`.toLowerCase();
        return identity.includes("1am") || identity.includes("oneam");
      }) ?? (candidates.length === 1 ? candidates[0] : undefined);
      if (wallet) return resolve(wallet);
      if (++attempts > 100) return resolve(null);
      window.setTimeout(check, 100);
    };
    check();
  });
}

export function createPrivateStateProvider() {
  let scope = "undeployed";
  const states = new Map<string, unknown>();
  const signingKeys = new Map<string, unknown>();
  const scoped = (id: string) => `${scope}:${id}`;

  return {
    setContractAddress(address: string) { scope = address; },
    async set(id: string, state: unknown) { states.set(scoped(id), state); },
    async get(id: string) { return states.get(scoped(id)) ?? null; },
    async remove(id: string) { states.delete(scoped(id)); },
    async clear() { states.clear(); },
    async setSigningKey(address: string, key: unknown) { signingKeys.set(address, key); },
    async getSigningKey(address: string) { return signingKeys.get(address) ?? null; },
    async removeSigningKey(address: string) { signingKeys.delete(address); },
    async clearSigningKeys() { signingKeys.clear(); },
    async exportPrivateStates(): Promise<never> { throw new Error("Private-state export is not enabled."); },
    async importPrivateStates(): Promise<never> { throw new Error("Private-state import is not enabled."); },
    async exportSigningKeys(): Promise<never> { throw new Error("Signing-key export is not enabled."); },
    async importSigningKeys(): Promise<never> { throw new Error("Signing-key import is not enabled."); },
  };
}

export function createPatchedPublicDataProvider(queryUrl: string, subscriptionUrl: string) {
  const base = indexerPublicDataProvider(queryUrl, subscriptionUrl);

  async function queryLatest(query: string, address: string) {
    const response = await fetch(queryUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query, variables: { address } }),
    });
    if (!response.ok) throw new Error(`Indexer HTTP error: ${response.status}`);
    const payload = await response.json();
    if (payload.errors?.length) {
      throw new Error(payload.errors.map((error: any) => error.message).join("; "));
    }
    return payload.data?.contractAction ?? null;
  }

  return {
    ...base,
    async queryContractState(contractAddress: string, config?: any) {
      if (config) return base.queryContractState(contractAddress, config);
      const action = await queryLatest(`
        query LATEST_CONTRACT_STATE($address: HexEncoded!) {
          contractAction(address: $address) { state }
        }`, contractAddress);
      return action ? ContractState.deserialize(fromHex(action.state)) : null;
    },
    async queryZSwapAndContractState(contractAddress: string, config?: any) {
      if (config) return base.queryZSwapAndContractState(contractAddress, config);
      const action = await queryLatest(`
        query LATEST_BOTH_STATE($address: HexEncoded!) {
          contractAction(address: $address) {
            state
            zswapState
            transaction { block { ledgerParameters } }
          }
        }`, contractAddress);
      if (!action?.zswapState) return null;
      return [
        ZswapChainState.deserialize(fromHex(action.zswapState)),
        ContractState.deserialize(fromHex(action.state)),
        action.transaction?.block?.ledgerParameters
          ? LedgerParameters.deserialize(fromHex(action.transaction.block.ledgerParameters))
          : LedgerParameters.initialParameters(),
      ] as const;
    },
  };
}

export async function connectOneAmPreprod(zkAssetBasePath: string): Promise<ConnectedSession> {
  // Must run before extension connect or any wallet API call.
  selectPreprodNetwork();
  const wallet = await detectOneAmWallet();
  if (!wallet) throw new Error("1AM wallet not detected. Install extension and reload page.");

  const api = await wallet.connect(MIDNIGHT_NETWORK);
  const [config, unshieldedAddress, shieldedAddress] = await Promise.all([
    api.getConfiguration(),
    api.getUnshieldedAddress(),
    api.getShieldedAddresses(),
  ]);

  const returnedNetwork = String(config.networkId ?? "").toLowerCase();
  if (!returnedNetwork.includes(MIDNIGHT_NETWORK)) {
    throw new Error(`1AM returned network "${config.networkId}". Switch wallet to preprod and reconnect.`);
  }
  selectPreprodNetwork();

  const zkConfigProvider = new FetchZkConfigProvider(
    new URL(zkAssetBasePath, window.location.origin).toString(),
    window.fetch.bind(window),
  );
  const provingProvider = await api.getProvingProvider(zkConfigProvider);
  const proofProvider = {
    async proveTx(unprovenTx: any) {
      const { CostModel } = await import("@midnight-ntwrk/ledger-v8");
      return unprovenTx.prove(provingProvider, CostModel.initialCostModel());
    },
  };
  const walletProvider: WalletProvider = {
    getCoinPublicKey: () => shieldedAddress.shieldedCoinPublicKey,
    getEncryptionPublicKey: () => shieldedAddress.shieldedEncryptionPublicKey,
    balanceTx: async (tx: any) => {
      const balanced = await api.balanceUnsealedTransaction(toHex(tx.serialize()));
      if (!balanced?.tx) throw new Error("1AM returned invalid balanced transaction.");
      const { Transaction } = await import("@midnight-ntwrk/ledger-v8");
      return Transaction.deserialize("signature", "proof", "binding", fromHex(balanced.tx));
    },
  };
  const midnightProvider: MidnightProvider = {
    submitTx: async (tx: any) => {
      const txHex = toHex(tx.serialize());
      const result = await api.submitTransaction(txHex);
      if (typeof result === "string" && result) return result;
      if (result?.transactionId) return result.transactionId;
      if (result?.id) return result.id;
      return txHex.slice(0, 64);
    },
  };

  return {
    api,
    config,
    providers: {
      privateStateProvider: createPrivateStateProvider(),
      publicDataProvider: createPatchedPublicDataProvider(config.indexerUri, config.indexerWsUri),
      zkConfigProvider,
      proofProvider,
      walletProvider,
      midnightProvider,
    },
    unshieldedAddress: unshieldedAddress.unshieldedAddress,
  };
}

export async function fetchContractState(queryUrl: string, contractAddress: string): Promise<string | null> {
  const response = await fetch(queryUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: "query($address: HexEncoded!) { contractAction(address: $address) { state } }",
      variables: { address: contractAddress },
    }),
  });
  const payload = await response.json();
  return payload?.data?.contractAction?.state ?? null;
}

export async function pollForState(
  queryUrl: string,
  contractAddress: string,
  onProgress?: (attempt: number) => void,
  maxAttempts = 120,
  intervalMs = 2_000,
): Promise<string> {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    onProgress?.(attempt + 1);
    const state = await fetchContractState(queryUrl, contractAddress);
    if (state) return state;
    await new Promise((resolve) => window.setTimeout(resolve, intervalMs));
  }
  throw new Error(`Contract not indexed after ${(maxAttempts * intervalMs) / 1_000}s.`);
}
