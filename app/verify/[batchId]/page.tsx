"use client";

import Link from "next/link";
import { use } from "react";

import { Brand } from "@/components/brand";
import { useLiveLedger } from "@/components/use-live-ledger";
import { GREEN_PROOF_CONTRACT_ADDRESS, GREEN_PROOF_CONTRACT_SHORT } from "@/lib/contract-config";
import { normalizeBytes32 } from "@/lib/input-validation";

const short = (value: string) => `${value.slice(0, 10)}…${value.slice(-8)}`;
const statusName = ["Pending", "Compliant", "Non-compliant", "Revoked", "Archived", "Deleted"] as const;
const formatChainTime = (value: bigint) => {
  const numeric = Number(value);
  const milliseconds = numeric < 1_000_000_000_000 ? numeric * 1000 : numeric;
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(new Date(milliseconds));
};

export default function BatchVerificationPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = use(params);
  let id = "";
  let invalidId = false;
  try {
    id = normalizeBytes32(decodeURIComponent(batchId), "Batch ID");
  } catch {
    invalidId = true;
  }
  const { ledger, loading, error } = useLiveLedger();
  const record = invalidId ? undefined : ledger?.batches.find((batch) => batch.id === id);
  const verification = record?.latestVerification;
  const validUntil = verification?.validUntil;
  return <main className="result-page"><header className="result-header"><Brand /><Link href="/verify">Verify another batch</Link></header>{invalidId && <section className="result-card"><h1>Invalid batch ID</h1><p>Batch ID must be exactly 64 hexadecimal characters.</p></section>}{!invalidId && loading && <section className="result-card"><h1>Reading Midnight ledger…</h1></section>}{!invalidId && error && <section className="result-card"><h1>Ledger unavailable</h1><p>{error}</p></section>}{!invalidId && !loading && !error && !record && <section className="result-card"><h1>Batch not found</h1><p>No matching batch exists in current Preprod contract state.</p></section>}{record && <section className="result-card"><div className="result-seal"><span>{record.status === 1 ? "✓" : "·"}</span></div><p className="result-label">Green Proof on Midnight Preprod</p><h1>{statusName[record.status]}</h1><p className="result-summary">Result read from public contract state. Private composition remains undisclosed.</p>{validUntil && <div className={`validity-banner ${verification?.revoked ? "validity-banner--expired" : ""}`}><span>{verification?.revoked ? "Revoked evidence" : "Evidence validity"}</span><strong>Valid until {formatChainTime(validUntil)} UTC</strong></div>}<div className="result-rule"><span>Public requirement</span><strong>≥ {(Number(record.requirementBps) / 100).toFixed(2)}%</strong></div><dl><div><dt>Batch ID</dt><dd className="mono-muted">{short(record.id)}</dd></div><div><dt>Product hash</dt><dd className="mono-muted">{short(record.productHash)}</dd></div><div><dt>Metadata hash</dt><dd className="mono-muted">{short(record.metadataHash)}</dd></div><div><dt>Lab ID</dt><dd>{verification?.labId.toString() ?? "—"}</dd></div><div><dt>Inspected</dt><dd>{verification ? `${formatChainTime(verification.inspectedAt)} UTC` : "—"}</dd></div><div><dt>Evidence commitment</dt><dd className="mono-muted">{verification ? short(verification.evidenceCommitment) : "—"}</dd></div><div><dt>Verifications</dt><dd>{record.verificationCount.toString()}</dd></div><div><dt>Contract</dt><dd className="mono-muted" title={GREEN_PROOF_CONTRACT_ADDRESS}>{GREEN_PROOF_CONTRACT_SHORT}</dd></div></dl><aside><b>Exact composition remains private.</b><p>Only public verdict, threshold, hashes, and commitment are readable from chain.</p></aside></section>}<footer className="result-footer"><span title={GREEN_PROOF_CONTRACT_ADDRESS}>Contract {GREEN_PROOF_CONTRACT_SHORT}</span><span>Preprod · Public · Read-only</span></footer></main>;
}
