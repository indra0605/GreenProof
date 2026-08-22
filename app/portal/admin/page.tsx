"use client";

import { StatusBadge } from "@/components/status-badge";
import { useLiveLedger } from "@/components/use-live-ledger";
import { useWalletSession } from "@/components/wallet-session";
import { useState } from "react";

const short = (value: string) => `${value.slice(0, 10)}…${value.slice(-8)}`;

export default function AdminPage() {
  const { ledger, loading, error, refresh } = useLiveLedger();
  const { callCircuit, deriveRoleKeys, status: walletStatus } = useWalletSession();
  const [labId, setLabId] = useState("");
  const [operatorKey, setOperatorKey] = useState("");
  const [metadataHash, setMetadataHash] = useState("");
  const [signingX, setSigningX] = useState("");
  const [signingY, setSigningY] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [keyStatus, setKeyStatus] = useState("");
  const register = async (event: React.FormEvent) => {
    event.preventDefault(); setSubmitting(true);
    try { await callCircuit("manageLab", [0, BigInt(labId), fromHex32(operatorKey), { x: BigInt(signingX), y: BigInt(signingY) }, fromHex32(metadataHash), true]); await refresh(); }
    finally { setSubmitting(false); }
  };
  async function fillLabKey() { try { const keys = await deriveRoleKeys(); setOperatorKey(keys.labOperator); setKeyStatus("Lab operator key derived from current private state."); } catch (caught) { setKeyStatus(caught instanceof Error ? caught.message : String(caught)); } }
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Administration</p><h1>Administration</h1><p>Trusted labs and contract controls from live Preprod state.</p></div><div className="identity-chip"><span>Contract</span><strong>{ledger ? "Live" : "Loading"}</strong></div></div><div className="admin-grid"><section className="data-card span-two"><header><div><h2>Trusted labs</h2><p>Keys accepted by verification circuit</p></div></header>{loading && <p>Reading labs…</p>}{error && <p className="deploy-error">{error}</p>}{ledger && <div className="table-wrap"><table><thead><tr><th>Lab ID</th><th>Operator key</th><th>Metadata hash</th><th>Revision</th><th>Status</th></tr></thead><tbody>{ledger.labs.map((lab) => <tr key={lab.id.toString()}><td className="mono-muted">#{lab.id.toString()}</td><td className="mono-muted">{short(lab.operatorKey)}</td><td className="mono-muted">{short(lab.metadataHash)}</td><td>{lab.revision.toString()}</td><td><StatusBadge status={lab.active ? "Active" : "Inactive"} /></td></tr>)}</tbody></table></div>}</section><aside className="data-card control-card"><header><div><h2>Contract state</h2><p>Read from ledger</p></div></header><div className="contract-state"><span>{ledger?.paused ? "Paused" : "Writes enabled"}</span><StatusBadge status={ledger?.paused ? "Inactive" : "Active"} /></div><p>Admin transactions require caller secret matching deployed admin key.</p><button className="danger-action" type="button" onClick={() => void callCircuit("manageAdmin", [0, !ledger?.paused, new Uint8Array(32)])}>Toggle pause</button></aside></div><section className="data-card authority-card"><header><div><h2>Register trusted lab</h2><p>Real `manageLab` transaction via 1AM</p></div></header><form className="form-body" onSubmit={(event) => void register(event)}><label><span>Lab ID</span><input value={labId} onChange={(event) => setLabId(event.target.value)} inputMode="numeric" required /></label><label><span>Operator key (64 hex chars)</span><input value={operatorKey} onChange={(event) => setOperatorKey(event.target.value)} className="mono-input" required /><button type="button" className="button-link" onClick={() => void fillLabKey()}>Derive from connected wallet</button><small>{keyStatus}</small></label><label><span>Signing point X (decimal)</span><input value={signingX} onChange={(event) => setSigningX(event.target.value)} inputMode="numeric" required /></label><label><span>Signing point Y (decimal)</span><input value={signingY} onChange={(event) => setSigningY(event.target.value)} inputMode="numeric" required /></label><label><span>Metadata hash (64 hex chars)</span><input value={metadataHash} onChange={(event) => setMetadataHash(event.target.value)} className="mono-input" required /></label><button className="primary-action" disabled={submitting} type="submit">{submitting ? "Submitting…" : "Register lab with 1AM"}</button><p>{walletStatus}</p></form></section></>;
}

function fromHex32(value: string): Uint8Array { const clean = value.replace(/^0x/, ""); if (!/^[0-9a-f]{64}$/i.test(clean)) throw new Error("Expected 32-byte hex value."); return Uint8Array.from(clean.match(/.{2}/g)!.map((part) => Number.parseInt(part, 16))); }
