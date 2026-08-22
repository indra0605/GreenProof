"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { useWalletSession } from "@/components/wallet-session";

const bytes32 = (value: string, label: string) => {
  const clean = value.replace(/^0x/, "");
  if (!/^[0-9a-f]{64}$/i.test(clean)) throw new Error(`${label} must be 32-byte hex.`);
  return Uint8Array.from(clean.match(/.{2}/g)!.map((part) => Number.parseInt(part, 16)));
};

export default function NewBatchPage() {
  const { callCircuit, status, error } = useWalletSession();
  const [batchId, setBatchId] = useState("");
  const [productHash, setProductHash] = useState("");
  const [metadataHash, setMetadataHash] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [txId, setTxId] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true); setTxId("");
    try {
      const tx = await callCircuit("manageBatch", [0, bytes32(batchId, "Batch ID"), bytes32(productHash, "Product hash"), bytes32(metadataHash, "Metadata hash"), BigInt(Math.round(Number(requirement) * 100))]);
      setTxId(tx);
    } catch {
      // Provider status contains the user-safe error.
    } finally { setSubmitting(false); }
  }

  return <><div className="page-heading"><div><p className="breadcrumbs">Batches / Create</p><h1>Create batch</h1><p>Real `manageBatch(CREATE)` transaction on Midnight Preprod.</p></div></div><div className="form-layout"><form className="data-card form-card" onSubmit={(event) => void submit(event)}><header><div><h2>Public batch fields</h2><p>All hash fields are exactly 32 bytes.</p></div></header><div className="form-body"><label><span>Batch ID hash</span><input name="batchId" value={batchId} onChange={(event) => setBatchId(event.target.value)} placeholder="64 hex characters" className="mono-input" required /></label><label><span>Product hash</span><input name="productHash" value={productHash} onChange={(event) => setProductHash(event.target.value)} placeholder="64 hex characters" className="mono-input" required /></label><label><span>Metadata hash</span><input name="metadataHash" value={metadataHash} onChange={(event) => setMetadataHash(event.target.value)} placeholder="64 hex characters" className="mono-input" required /></label><label><span>Required recycled content (%)</span><input name="requirement" value={requirement} onChange={(event) => setRequirement(event.target.value)} type="number" min="0.01" max="100" step="0.01" required /></label><p className="privacy-notice"><b>Supplier proof required.</b> Caller secret comes from connected private state. 1AM proves, balances, and submits transaction.</p></div><footer><Link className="button-link" href="/portal/batches">Cancel</Link><button className="primary-action" type="submit" disabled={submitting}>{submitting ? "Proving in 1AM…" : "Create with 1AM"}</button></footer></form><aside className="form-help"><span>Transaction status</span><p>{error || status}</p>{txId && <p className="mono-muted">Transaction: {txId}</p>}<p>No product names or raw reports are written by this contract. Store product labels off-chain keyed by this hash.</p></aside></div></>;
}
