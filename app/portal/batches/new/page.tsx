"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { useWalletSession } from "@/components/wallet-session";
import { bytes32, percentageToBasisPoints } from "@/lib/input-validation";

export default function NewBatchPage() {
  const { callCircuit, status, error } = useWalletSession();
  const [batchId, setBatchId] = useState("");
  const [productHash, setProductHash] = useState("");
  const [metadataHash, setMetadataHash] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [txId, setTxId] = useState("");
  const [validationError, setValidationError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true); setTxId(""); setValidationError("");
    try {
      const tx = await callCircuit("manageBatch", [0, bytes32(batchId, "Batch ID"), bytes32(productHash, "Product hash"), bytes32(metadataHash, "Metadata hash"), percentageToBasisPoints(requirement)]);
      setTxId(tx);
    } catch (caught) {
      if (caught instanceof Error) setValidationError(caught.message);
    } finally { setSubmitting(false); }
  }

  return <><div className="page-heading"><div><p className="breadcrumbs">Batches / Create</p><h1>Create batch</h1><p>Create public references. Keep names, reports, and composition off-chain.</p></div></div><ol className="flow-steps" aria-label="Batch creation steps"><li><b>1</b><span><strong>Hash locally</strong>Prepare three 32-byte identifiers.</span></li><li><b>2</b><span><strong>Review public data</strong>Confirm threshold and hashes below.</span></li><li><b>3</b><span><strong>Approve in 1AM</strong>Submit transaction on Preprod.</span></li></ol><div className="form-layout"><form className="data-card form-card" onSubmit={(event) => void submit(event)}><header><div><h2>Public batch fields</h2><p>Required fields · all hashes become public.</p></div></header><div className="form-body"><label><span>Batch ID hash</span><input name="batchId" value={batchId} onChange={(event) => setBatchId(event.target.value)} placeholder="64 hex characters, for example a3f1…" className="mono-input" minLength={64} maxLength={66} spellCheck={false} required /><small>Unique 32-byte hex identifier. Optional `0x` prefix accepted.</small></label><label><span>Product hash</span><input name="productHash" value={productHash} onChange={(event) => setProductHash(event.target.value)} placeholder="64 hex characters, for example 91bc…" className="mono-input" minLength={64} maxLength={66} spellCheck={false} required /><small>Hash product data locally; never enter product name or recipe.</small></label><label><span>Metadata hash</span><input name="metadataHash" value={metadataHash} onChange={(event) => setMetadataHash(event.target.value)} placeholder="64 hex characters, for example e247…" className="mono-input" minLength={64} maxLength={66} spellCheck={false} required /><small>Hash report metadata locally; do not paste raw report contents.</small></label><label><span>Required recycled content (%)</span><div className="input-suffix"><input name="requirement" value={requirement} onChange={(event) => setRequirement(event.target.value)} type="number" inputMode="decimal" min="0.01" max="100" step="0.01" placeholder="50.00" required /><b>%</b></div><small>Public threshold from 0.01% to 100%.</small></label><div className="privacy-notice"><b>Do not enter sensitive source data.</b><p>Seed phrases, private keys, exact composition, supplier names, and raw reports never belong in these public fields.</p></div></div><footer><Link className="button-link" href="/portal/batches">Cancel</Link><button className="primary-action" type="submit" disabled={submitting}>{submitting ? "Proving in 1AM…" : "Review and create"}</button></footer></form><aside className="form-help"><span>{txId ? "Batch submitted" : "Before you submit"}</span>{txId ? <div className="success-panel" role="status" aria-live="polite"><b>Transaction accepted.</b><p>Next: open public verifier after Preprod indexes transaction.</p><Link href={`/verify/${batchId.trim().replace(/^0x/i, "")}`}>Verify this batch →</Link><code>{txId}</code></div> : <><dl><div><dt>Batch ID</dt><dd>{batchId ? `${batchId.slice(0, 8)}…` : "Required"}</dd></div><div><dt>Product hash</dt><dd>{productHash ? `${productHash.slice(0, 8)}…` : "Required"}</dd></div><div><dt>Metadata hash</dt><dd>{metadataHash ? `${metadataHash.slice(0, 8)}…` : "Required"}</dd></div><div><dt>Threshold</dt><dd>{requirement ? `${requirement}%` : "Required"}</dd></div></dl><p>Review carefully. These values and threshold become public and cannot be edited through this form.</p></>}<p className={validationError || error ? "field-error" : ""} role={validationError || error ? "alert" : undefined}>{validationError || error || status}</p></aside></div></>;
}
