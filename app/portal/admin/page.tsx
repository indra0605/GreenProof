import { StatusBadge } from "@/components/status-badge";

const labs = [
  ["0092", "Circular Materials Lab", "5rP8…2kQa", "3", "Active"],
  ["0144", "Nordic Polymer Institute", "8xLe…9zM1", "1", "Active"],
  ["0087", "EcoSpec Testing", "2bQ4…7tFn", "4", "Inactive"],
] as const;

export default function AdminPage() {
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Administration</p><h1>Administration</h1><p>Manage trust anchors and contract safety controls.</p></div><div className="identity-chip"><span>Authority</span><strong>Admin key · 7ac1…80ef</strong></div></div><div className="admin-grid"><section className="data-card span-two"><header><div><h2>Trusted labs</h2><p>Keys accepted by verification circuit</p></div><button className="primary-action" type="button">Register lab</button></header><div className="table-wrap"><table><thead><tr><th>Lab ID</th><th>Organization</th><th>Operator key</th><th>Revision</th><th>Status</th><th /></tr></thead><tbody>{labs.map((lab) => <tr key={lab[0]}><td className="mono-muted">#{lab[0]}</td><td>{lab[1]}</td><td className="mono-muted">{lab[2]}</td><td>{lab[3]}</td><td><StatusBadge status={lab[4]} /></td><td><button className="row-text-button" type="button">Manage</button></td></tr>)}</tbody></table></div></section><aside className="data-card control-card"><header><div><h2>Contract state</h2><p>Emergency controls</p></div></header><div className="contract-state"><span>Writes enabled</span><StatusBadge status="Active" /></div><p>Pausing blocks new batches and verification. Public reads remain available.</p><button className="danger-action" type="button">Pause contract</button></aside></div><section className="data-card authority-card"><header><div><h2>Admin authority</h2><p>Knowledge-of-secret authentication</p></div></header><div><div><span>Current admin</span><b>7ac1e0b3…80ef9902</b></div><p>Transfer changes administrative authority permanently. New administrator must derive and verify destination key before transaction.</p><button className="button-link" type="button">Transfer authority →</button></div></section></>;
}
