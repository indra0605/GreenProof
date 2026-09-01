import Link from "next/link";

import { Icon } from "@/components/icons";
import { StatusBadge } from "@/components/status-badge";

const recent = [
  ["A-1042", "OceanForm Packaging", "≥ 50%", "Compliant", "9f3a…c71"],
  ["D-3390", "TerraWeave Sheet", "≥ 30%", "Pending", "—"],
  ["B-0871", "OceanForm Packaging", "≥ 50%", "Non-compliant", "2d1e…4a0"],
] as const;

export default function OverviewPage() {
  return (
    <>
      <div className="page-heading"><div><p className="breadcrumbs">Workspace / Overview</p><h1>Good afternoon.</h1><p>Here&apos;s current verification state across organization.</p></div><span className="ledger-sync"><i />Ledger synced · block 2,418,031</span></div>
      <section className="metric-grid" aria-label="Verification summary">
        <article><span>Registered batches</span><strong>24</strong><small>3 added this month</small></article>
        <article><span>Valid badges</span><strong>18</strong><small className="positive">75% of all batches</small></article>
        <article><span>Pending review</span><strong>4</strong><small>Oldest: 2 days</small></article>
        <article><span>Trusted labs</span><strong>3</strong><small>All keys active</small></article>
      </section>
      <div className="content-grid">
        <section className="data-card span-two">
          <header><div><h2>Recent batches</h2><p>Latest ledger records</p></div><Link href="/portal/batches">View all <Icon name="arrow" /></Link></header>
          <div className="table-wrap"><table><thead><tr><th>Batch</th><th>Product</th><th>Requirement</th><th>Status</th><th>Proof</th></tr></thead><tbody>{recent.map((row) => <tr key={row[0]}><td><Link className="mono-link" href={`/verify/${row[0]}`}>{row[0]}</Link></td><td>{row[1]}</td><td>{row[2]}</td><td><StatusBadge status={row[3]} /></td><td className="mono-muted">{row[4]}</td></tr>)}</tbody></table></div>
        </section>
        <aside className="data-card privacy-card"><header><div><h2>Privacy boundary</h2><p>Current contract policy</p></div></header><div className="privacy-diagram"><div><span>Private state</span><b>Exact percentage<br />Recipe &amp; sources<br />Certificate signature</b></div><i>→</i><div><span>Public ledger</span><b>Verdict<br />Threshold<br />Validity</b></div></div><p>Private inputs remain on prover device. Only compliance outcome crosses boundary.</p></aside>
      </div>
      <section className="activity-strip"><div><span>Latest event</span><strong>Batch A-1042 verified compliant</strong></div><time>10 Aug 2026 · 09:14 UTC</time><Link href="/verify/A-1042">Inspect proof →</Link></section>
    </>
  );
}
