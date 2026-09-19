"use client";

import Link from "next/link";

import { useWalletSession } from "@/components/wallet-session";

export default function SettingsPage() {
  const { contractAddress, session, status, error } = useWalletSession();
  return <><div className="page-heading"><div><p className="breadcrumbs">Workspace / Settings</p><h1>Settings</h1><p>Connection and contract state from current browser session.</p></div></div><section className="data-card settings-card"><header><div><h2>Midnight connection</h2><p>Active Preprod deployment</p></div></header><div className="form-body"><label><span>Network</span><input value="Preprod" readOnly /></label><label><span>Contract address</span><input className="mono-input" value={contractAddress} readOnly /><small>Used by live ledger reads and wallet calls.</small></label><label><span>Wallet</span><input value={session ? session.unshieldedAddress : "Not connected"} readOnly /><small>{error || status}</small></label><label><span>Proving provider</span><input value="1AM wallet / ProofStation" readOnly /></label></div><footer><Link className="primary-action" href="/deploy">Deployment screen</Link></footer></section><section className="data-card settings-card"><header><div><h2>Private state</h2><p>Kept in connected browser session</p></div></header><div className="settings-row"><div><b>Caller secret and evidence</b><p>Required for supplier, admin, and lab circuits. Never displayed or sent to an application server.</p></div><span className="config-state">Session only</span></div></section></>;
}
