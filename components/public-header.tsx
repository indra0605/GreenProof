import Link from "next/link";

import { Brand } from "./brand";

export function PublicHeader() {
  return (
    <header className="public-header">
      <Brand />
      <nav aria-label="Public navigation">
        <Link href="/verify">Verify a batch</Link>
        <Link href="/deploy">Deploy</Link>
        <Link href="/portal">Workspace</Link>
      </nav>
      <Link className="header-action" href="/deploy">Contract status</Link>
    </header>
  );
}
