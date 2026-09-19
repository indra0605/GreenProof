"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { GREEN_PROOF_CONTRACT_ADDRESS } from "@/lib/contract-config";
import { callGreenProofCircuit, deriveCurrentRoleKeys, deployGreenProof } from "@/lib/green-proof";
import { connectOneAmPreprod, type ConnectedSession } from "@/lib/midnight";

type WalletSessionContextValue = {
  session: ConnectedSession | null;
  contractAddress: string;
  status: string;
  error: string;
  connect: () => Promise<void>;
  deployFresh: () => Promise<string>;
  callCircuit: (
    circuitId: "manageAdmin" | "manageLab" | "manageBatch" | "verifyBatch" | "revokeBatch",
    args: readonly unknown[],
  ) => Promise<string>;
  deriveRoleKeys: () => Promise<{ admin: string; supplier: string; labOperator: string }>;
};

const WalletSessionContext = createContext<WalletSessionContextValue | null>(null);

export function WalletSessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<ConnectedSession | null>(null);
  const [contractAddress, setContractAddress] = useState<string>(GREEN_PROOF_CONTRACT_ADDRESS);
  const [status, setStatus] = useState("Wallet disconnected");
  const [error, setError] = useState("");

  const connect = useCallback(async () => {
    setError("");
    setStatus("Connecting 1AM on preprod…");
    try {
      const connected = await connectOneAmPreprod("/zk/green-proof/");
      setSession(connected);
      setStatus(`Connected · ${connected.unshieldedAddress.slice(0, 16)}…`);
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught);
      setError(message);
      setStatus("Connection failed");
      throw caught;
    }
  }, []);

  const deployFresh = useCallback(async () => {
    if (!session) throw new Error("Connect 1AM first.");
    setError("");
    setStatus("Proving and submitting deployment…");
    try {
      const address = await deployGreenProof(session);
      setContractAddress(address);
      setStatus(`Deployment submitted · ${address.slice(0, 14)}…`);
      return address;
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
      setStatus("Deployment failed");
      throw caught;
    }
  }, [session]);

  const callCircuit = useCallback<WalletSessionContextValue["callCircuit"]>(async (circuitId, args) => {
    if (!session) throw new Error("Connect 1AM first.");
    setError("");
    setStatus(`Proving ${circuitId}… approve transaction in 1AM.`);
    try {
      const txId = await callGreenProofCircuit(session, contractAddress, circuitId, args);
      setStatus(`${circuitId} confirmed`);
      return txId;
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
      setStatus(`${circuitId} failed`);
      throw caught;
    }
  }, [contractAddress, session]);

  const deriveRoleKeys = useCallback(async () => {
    if (!session) throw new Error("Connect 1AM first.");
    return deriveCurrentRoleKeys(session);
  }, [session]);

  const value = useMemo(() => ({
    session,
    contractAddress,
    status,
    error,
    connect,
    deployFresh,
    callCircuit,
    deriveRoleKeys,
  }), [callCircuit, connect, contractAddress, deployFresh, deriveRoleKeys, error, session, status]);

  return <WalletSessionContext.Provider value={value}>{children}</WalletSessionContext.Provider>;
}

export function useWalletSession(): WalletSessionContextValue {
  const value = useContext(WalletSessionContext);
  if (!value) throw new Error("useWalletSession must be used inside WalletSessionProvider");
  return value;
}
