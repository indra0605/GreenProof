import { StatusBadge } from "@/components/status-badge";

const queue = [
  { id: "D-3390", supplier: "TerraWeave Materials", requirement: "≥ 30%", received: "12 Aug · 08:42", ready: true },
  { id: "F-5012", supplier: "Northloop Polymer", requirement: "≥ 55%", received: "11 Aug · 15:20", ready: true },
  { id: "G-6024", supplier: "ReForm Industrial", requirement: "≥ 45%", received: "11 Aug · 10:08", ready: false },
];

export default function LabQueuePage() {
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Lab queue</p><h1>Verification queue</h1><p>Generate proofs from signed evidence without publishing measured values.</p></div><div className="identity-chip"><span>Lab operator</span><strong>Lab #0092</strong><StatusBadge status="Active" /></div></div><section className="queue-grid">{queue.map((item) => <article className="queue-card" key={item.id}><header><div><span>Batch</span><h2>{item.id}</h2></div><StatusBadge status="Pending" /></header><dl><div><dt>Supplier</dt><dd>{item.supplier}</dd></div><div><dt>Requirement</dt><dd>{item.requirement}</dd></div><div><dt>Received</dt><dd>{item.received}</dd></div><div><dt>Private evidence</dt><dd className={item.ready ? "evidence-ready" : "evidence-missing"}>{item.ready ? "● Ready locally" : "○ Not attached"}</dd></div></dl><footer><button className="button-link" type="button">Review details</button><button className="primary-action" type="button" disabled={!item.ready}>Generate proof</button></footer></article>)}</section><aside className="security-callout"><span>Local proving boundary</span><p>Evidence fields are read from encrypted private state. Browser sends proof result—not raw certificate—to Midnight.</p><b>Actual percentage never appears in network request.</b></aside></>;
}
