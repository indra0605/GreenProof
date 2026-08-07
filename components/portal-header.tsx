import Link from "next/link";

import { Icon } from "./icons";

export function PortalHeader() {
  return (
    <header className="portal-header">
      <div className="portal-search"><Icon name="search" /><span>Search batches and proofs</span><kbd>⌘ K</kbd></div>
      <div className="portal-header__actions">
        <Link href="/portal/batches/new" className="compact-action"><Icon name="plus" />New batch</Link>
        <Link className="wallet-button" href="/deploy"><i />Contract status</Link>
      </div>
    </header>
  );
}
