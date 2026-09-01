import Link from "next/link";

import { GREEN_PROOF_CONTRACT_ADDRESS } from "@/lib/contract-config";

export default function SettingsPage() {
  return (
    <>
      <div className="page-heading"><div><p className="breadcrumbs">Workspace / Settings</p><h1>Settings</h1><p>Green Proof uses the deployed contract on Midnight preprod.</p></div></div>
      <section className="data-card settings-card">
        <header><div><h2>Midnight connection</h2><p>Active deployment</p></div></header>
        <div className="form-body">
          <label><span>Network</span><input value="Preprod" readOnly /></label>
          <label><span>Contract address</span><input className="mono-input" value={GREEN_PROOF_CONTRACT_ADDRESS} readOnly /><small>Canonical Green Proof deployment used by the workspace, verifier, and QR payloads.</small></label>
          <label><span>Proving provider</span><input value="1AM wallet / ProofStation" readOnly /><small>The wallet supplies proving, balancing, and transaction submission.</small></label>
        </div>
        <footer><Link className="primary-action" href="/deploy">View deployment</Link></footer>
      </section>
      <section className="data-card settings-card"><header><div><h2>Private state</h2><p>Secrets remain in the browser session</p></div></header><div className="settings-row"><div><b>Browser private-state provider</b><p>Stores caller evidence and signing material on the connected client.</p></div><span className="config-state">Wallet managed</span></div></section>
    </>
  );
}
