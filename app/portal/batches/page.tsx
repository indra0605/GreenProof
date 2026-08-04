import Link from "next/link";

import { Icon } from "@/components/icons";
import { StatusBadge, type Status } from "@/components/status-badge";

const rows: Array<[string, string, string, Status, string, string]> = [
  ["A-1042", "OceanForm Packaging", "50.00%", "Compliant", "Lab #0092", "10 Aug 2026"],
  ["D-3390", "TerraWeave Sheet", "30.00%", "Pending", "—", "12 Aug 2026"],
  ["B-0871", "OceanForm Packaging", "50.00%", "Non-compliant", "Lab #0092", "10 Aug 2026"],
  ["E-4011", "LoopLine Crate", "65.00%", "Compliant", "Lab #0144", "02 Aug 2026"],
  ["C-2209", "FiberForm Insert", "40.00%", "Revoked", "Lab #0087", "29 Jul 2026"],
];

export default function BatchesPage() {
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Batches</p><h1>Batches</h1><p>Create requirements, track proofs, and manage lifecycle.</p></div><Link className="primary-action" href="/portal/batches/new"><Icon name="plus" />Create batch</Link></div><section className="data-card"><div className="table-toolbar"><div className="filter-search"><Icon name="search" />Search batch ID or product</div><div><button className="filter-button active">All <span>24</span></button><button className="filter-button">Pending <span>4</span></button><button className="filter-button">Verified <span>18</span></button></div></div><div className="table-wrap"><table><thead><tr><th>Batch ID</th><th>Product</th><th>Requirement</th><th>Status</th><th>Verifier</th><th>Updated</th><th /></tr></thead><tbody>{rows.map((row) => <tr key={row[0]}><td><Link className="mono-link" href={`/verify/${row[0]}`}>{row[0]}</Link></td><td>{row[1]}</td><td>{row[2]}</td><td><StatusBadge status={row[3]} /></td><td>{row[4]}</td><td>{row[5]}</td><td><Link className="row-action" href={`/verify/${row[0]}`} aria-label={`Open ${row[0]}`}><Icon name="arrow" /></Link></td></tr>)}</tbody></table></div><footer className="table-footer"><span>Showing 5 of 24 batches</span><div><button disabled>Previous</button><button>Next</button></div></footer></section></>;
}
