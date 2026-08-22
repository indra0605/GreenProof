"use client";

import Link from "next/link";

import { Icon } from "@/components/icons";
import { StatusBadge, type Status } from "@/components/status-badge";
import { useLiveLedger } from "@/components/use-live-ledger";

const statusNames: Record<number, Status> = { 0: "Pending", 1: "Compliant", 2: "Non-compliant", 3: "Revoked", 4: "Inactive", 5: "Inactive" };
const short = (value: string) => `${value.slice(0, 10)}…${value.slice(-8)}`;

export default function BatchesPage() {
  const { ledger, loading, error } = useLiveLedger();
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Batches</p><h1>Batches</h1><p>Live records read from Midnight Preprod.</p></div><Link className="primary-action" href="/portal/batches/new"><Icon name="plus" />Create batch</Link></div><section className="data-card">{loading && <p>Reading contract state…</p>}{error && <p className="deploy-error" role="alert">{error}</p>}{ledger && <><div className="table-toolbar"><div className="filter-search"><Icon name="search" />Contract state</div><div><button className="filter-button active">All <span>{ledger.batches.length}</span></button><button className="filter-button">Pending <span>{ledger.batches.filter((batch) => batch.status === 0).length}</span></button><button className="filter-button">Verified <span>{ledger.batches.filter((batch) => batch.status === 1 || batch.status === 2).length}</span></button></div></div><div className="table-wrap"><table><thead><tr><th>Batch ID</th><th>Product hash</th><th>Requirement</th><th>Status</th><th>Verifications</th><th>Source</th><th /></tr></thead><tbody>{ledger.batches.map((batch) => <tr key={batch.id}><td><Link className="mono-link" href={`/verify/${batch.id}`}>{short(batch.id)}</Link></td><td className="mono-muted">{short(batch.productHash)}</td><td>{(Number(batch.requirementBps) / 100).toFixed(2)}%</td><td><StatusBadge status={statusNames[batch.status]} /></td><td>{batch.verificationCount.toString()}</td><td>Midnight ledger</td><td><Link className="row-action" href={`/verify/${batch.id}`} aria-label={`Open ${batch.id}`}><Icon name="arrow" /></Link></td></tr>)}</tbody></table></div><footer className="table-footer"><span>{ledger.batches.length} live batches</span><span>Contract {short(ledger.address)}</span></footer></>}</section></>;
}
