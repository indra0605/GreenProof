"use client";

import Link from "next/link";

import { Icon } from "@/components/icons";
import { StatusBadge } from "@/components/status-badge";
import { useLiveLedger } from "@/components/use-live-ledger";

const statusNames = ["Pending", "Compliant", "Non-compliant", "Revoked", "Inactive", "Inactive"] as const;
const short = (value: string) => `${value.slice(0, 10)}…${value.slice(-8)}`;

export default function OverviewPage() {
  const { ledger, loading, error } = useLiveLedger();
  return (
    <>
      <div className="page-heading"><div><p className="breadcrumbs">Workspace / Overview</p><h1>Live ledger.</h1><p>Current state read directly from Midnight Preprod.</p></div><span className="ledger-sync"><i />{loading ? "Reading ledger…" : error ? "Ledger unavailable" : "Ledger synced"}</span></div>
      <section className="metric-grid" aria-label="Verification summary">
        <article><span>Registered batches</span><strong>{ledger?.totalBatches.toString() ?? "—"}</strong><small>From contract ledger</small></article>
        <article><span>Verifications</span><strong>{ledger?.totalVerifications.toString() ?? "—"}</strong><small className="positive">Public proof records</small></article>
        <article><span>Pending review</span><strong>{ledger?.batches.filter((batch) => batch.status === 0).length ?? "—"}</strong><small>Current contract state</small></article>
        <article><span>Trusted labs</span><strong>{ledger?.totalLabs.toString() ?? "—"}</strong><small>Registered on-chain</small></article>
      </section>
      <div className="content-grid">
        <section className="data-card span-two">
          <header><div><h2>Recent batches</h2><p>Latest ledger records</p></div><Link href="/portal/batches">View all <Icon name="arrow" /></Link></header>
          <div className="table-wrap">{error && <p className="deploy-error">{error}</p>}{ledger && <table><thead><tr><th>Batch</th><th>Product hash</th><th>Requirement</th><th>Status</th><th>Verifications</th></tr></thead><tbody>{ledger.batches.slice(0, 5).map((batch) => <tr key={batch.id}><td><Link className="mono-link" href={`/verify/${batch.id}`}>{short(batch.id)}</Link></td><td className="mono-muted">{short(batch.productHash)}</td><td>{(Number(batch.requirementBps) / 100).toFixed(2)}%</td><td><StatusBadge status={statusNames[batch.status]} /></td><td>{batch.verificationCount.toString()}</td></tr>)}</tbody></table>}</div>
        </section>
        <aside className="data-card privacy-card"><header><div><h2>Privacy boundary</h2><p>Current contract policy</p></div></header><div className="privacy-diagram"><div><span>Private state</span><b>Exact percentage<br />Recipe &amp; sources<br />Certificate signature</b></div><i>→</i><div><span>Public ledger</span><b>Verdict<br />Threshold<br />Validity</b></div></div><p>Private inputs remain on prover device. Only compliance outcome crosses boundary.</p></aside>
      </div>
      <section className="activity-strip"><div><span>Contract</span><strong>{ledger ? short(ledger.address) : "Waiting for ledger"}</strong></div><time>Preprod</time><Link href="/verify">Public verifier →</Link></section>
    </>
  );
}
