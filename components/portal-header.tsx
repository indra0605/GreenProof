"use client";

import Link from "next/link";
import { useWalletSession } from "./wallet-session";

import { Icon } from "./icons";

export function PortalHeader() {
  const { session, status, error, connect, deployFresh } = useWalletSession();
  return (
    <header className="portal-header">
      <div className="portal-search"><Icon name="search" /><span>Search batches and proofs</span><kbd>⌘ K</kbd></div>
      <div className="portal-header__actions">
        <Link href="/portal/batches/new" className="compact-action"><Icon name="plus" />New batch</Link>
        {!session ? <button className="wallet-button" type="button" onClick={() => void connect()}><i />Connect 1AM</button> : <button className="wallet-button" type="button" onClick={() => void deployFresh()}><i />Deploy fresh contract</button>}
        <span title={error || status} className="wallet-status">{error || status}</span>
      </div>
    </header>
  );
}
