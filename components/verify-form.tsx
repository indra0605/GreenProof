"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { GREEN_PROOF_CONTRACT_ADDRESS, GREEN_PROOF_CONTRACT_SHORT } from "@/lib/contract-config";

import { Icon } from "./icons";

export function VerifyForm() {
  const router = useRouter();
  const [batchId, setBatchId] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = batchId.trim().toUpperCase();
    if (clean) router.push(`/verify/${encodeURIComponent(clean)}`);
  }
  return <form className="verify-form" onSubmit={submit}><label htmlFor="batch-id">Batch ID hash</label><div><Icon name="search" /><input id="batch-id" value={batchId} onChange={(event) => setBatchId(event.target.value)} placeholder="64 hex characters" autoComplete="off" required /><button type="submit">Verify batch <Icon name="arrow" /></button></div><p title={GREEN_PROOF_CONTRACT_ADDRESS}>Live Preprod lookup · Contract {GREEN_PROOF_CONTRACT_SHORT} · No wallet required</p></form>;
}
