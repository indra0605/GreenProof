"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { GREEN_PROOF_CONTRACT_ADDRESS, GREEN_PROOF_CONTRACT_SHORT } from "@/lib/contract-config";

import { Icon } from "./icons";

export function VerifyForm() {
  const router = useRouter();
  const [batchId, setBatchId] = useState("");
  const [error, setError] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = batchId.trim().replace(/^0x/, "").toLowerCase();
    if (!/^[0-9a-f]{64}$/.test(clean)) {
      setError("Enter a 64-character hexadecimal batch ID. Remove spaces and try again.");
      return;
    }
    setError("");
    router.push(`/verify/${encodeURIComponent(clean)}`);
  }
  return <form className="verify-form" onSubmit={submit} noValidate><label htmlFor="batch-id">Batch ID hash</label><div><Icon name="search" /><input id="batch-id" value={batchId} onChange={(event) => { setBatchId(event.target.value); if (error) setError(""); }} placeholder="Example: a3f1… (64 hex characters)" autoComplete="off" spellCheck={false} aria-describedby={error ? "batch-id-error batch-id-help" : "batch-id-help"} aria-invalid={Boolean(error)} required /><button type="submit">Verify batch <Icon name="arrow" /></button></div>{error && <p id="batch-id-error" className="field-error" role="alert">{error}</p>}<p id="batch-id-help" title={GREEN_PROOF_CONTRACT_ADDRESS}>Live Preprod lookup · Contract {GREEN_PROOF_CONTRACT_SHORT} · No wallet required</p></form>;
}
