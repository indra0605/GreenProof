"use client";

import { FormEvent, useState } from "react";

import { StatusBadge } from "@/components/status-badge";
import { useLiveLedger } from "@/components/use-live-ledger";
import { useWalletSession } from "@/components/wallet-session";
import { setVerificationEvidence } from "@/lib/green-proof";

const bytes32 = (value: string, label: string) => {
  const clean = value.replace(/^0x/, "");
  if (!/^[0-9a-f]{64}$/i.test(clean)) throw new Error(`${label} must be 32-byte hex.`);
  return Uint8Array.from(clean.match(/.{2}/g)!.map((part) => Number.parseInt(part, 16)));
};
const short = (value: string) => `${value.slice(0, 10)}…${value.slice(-8)}`;

export default function LabQueuePage() {
  const { ledger, loading, error, refresh } = useLiveLedger();
  const { session, callCircuit, status: walletStatus } = useWalletSession();
  const [batchId, setBatchId] = useState("");
  const [actualBps, setActualBps] = useState("");
  const [labId, setLabId] = useState("");
  const [inspectedAt, setInspectedAt] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [nonce, setNonce] = useState("");
  const [annX, setAnnX] = useState("");
  const [annY, setAnnY] = useState("");
  const [response, setResponse] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [txId, setTxId] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!session) throw new Error("Connect 1AM and deploy a contract in this browser session first.");
    setSubmitting(true); setTxId("");
    try {
      await setVerificationEvidence(session, { actualBps: BigInt(actualBps), labId: BigInt(labId), inspectedAt: BigInt(inspectedAt), validUntil: BigInt(validUntil), commitmentNonce: bytes32(nonce, "Commitment nonce"), signature: { announcement: { x: BigInt(annX), y: BigInt(annY) }, response: BigInt(response) } });
      const tx = await callCircuit("verifyBatch", [bytes32(batchId, "Batch ID")]);
      setTxId(tx); await refresh();
    } catch {
      // Provider status contains the user-safe error.
    } finally { setSubmitting(false); }
  }

  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Lab queue</p><h1>Verification queue</h1><p>Live batches and real private-evidence proof submission.</p></div><div className="identity-chip"><span>On-chain labs</span><strong>{ledger?.totalLabs.toString() ?? "—"}</strong></div></div><section className="queue-grid">{loading && <p>Reading contract state…</p>}{error && <p className="deploy-error">{error}</p>}{ledger?.batches.filter((batch) => batch.status === 0).map((batch) => <article className="queue-card" key={batch.id}><header><div><span>Batch hash</span><h2>{short(batch.id)}</h2></div><StatusBadge status="Pending" /></header><dl><div><dt>Requirement</dt><dd>{(Number(batch.requirementBps) / 100).toFixed(2)}%</dd></div><div><dt>Product hash</dt><dd>{short(batch.productHash)}</dd></div><div><dt>Private evidence</dt><dd>Supplied only during proof</dd></div></dl></article>)}</section><section className="data-card authority-card"><header><div><h2>Submit private verification</h2><p>Real `verifyBatch` transaction. Exact percentage never enters public state.</p></div></header><form className="form-body" onSubmit={(event) => void submit(event)}><label><span>Batch ID (32-byte hex)</span><input value={batchId} onChange={(event) => setBatchId(event.target.value)} className="mono-input" required /></label><label><span>Actual recycled content (basis points)</span><input value={actualBps} onChange={(event) => setActualBps(event.target.value)} type="number" min="0" max="10000" required /></label><label><span>Lab ID</span><input value={labId} onChange={(event) => setLabId(event.target.value)} type="number" min="1" required /></label><div className="form-row"><label><span>Inspected at (chain time)</span><input value={inspectedAt} onChange={(event) => setInspectedAt(event.target.value)} type="number" required /></label><label><span>Valid until (chain time)</span><input value={validUntil} onChange={(event) => setValidUntil(event.target.value)} type="number" required /></label></div><label><span>Commitment nonce (32-byte hex)</span><input value={nonce} onChange={(event) => setNonce(event.target.value)} className="mono-input" required /></label><div className="form-row"><label><span>Schnorr announcement X</span><input value={annX} onChange={(event) => setAnnX(event.target.value)} required /></label><label><span>Schnorr announcement Y</span><input value={annY} onChange={(event) => setAnnY(event.target.value)} required /></label></div><label><span>Schnorr response</span><input value={response} onChange={(event) => setResponse(event.target.value)} required /></label><button className="primary-action" type="submit" disabled={submitting}>{submitting ? "Proving in 1AM…" : "Verify with 1AM"}</button><p>{walletStatus}</p>{txId && <p className="mono-muted">Transaction: {txId}</p>}</form></section></>;
}
