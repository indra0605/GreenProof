"use client";

import { useCallback, useEffect, useState } from "react";

import { fetchLiveLedger, type LiveLedger } from "@/lib/live-ledger";
import { useWalletSession } from "./wallet-session";

export function useLiveLedger(address?: string) {
  const wallet = useWalletSession();
  const [ledger, setLedger] = useState<LiveLedger | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setLedger(await fetchLiveLedger(address ?? wallet.contractAddress));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    } finally {
      setLoading(false);
    }
  }, [address, wallet.contractAddress]);

  useEffect(() => {
    const timer = window.setTimeout(() => { void refresh(); }, 0);
    return () => window.clearTimeout(timer);
  }, [refresh]);

  return { ledger, loading, error, refresh };
}
