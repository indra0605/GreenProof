"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Brand } from "./brand";
import { Icon } from "./icons";
import { GREEN_PROOF_CONTRACT_SHORT } from "@/lib/contract-config";

const links = [
  { href: "/portal", label: "Overview", icon: "grid", exact: true },
  { href: "/portal/batches", label: "Batches", icon: "batch" },
  { href: "/portal/lab", label: "Lab queue", icon: "flask" },
  { href: "/portal/admin", label: "Administration", icon: "shield" },
  { href: "/portal/settings", label: "Settings", icon: "settings" },
];

export function PortalNav() {
  const pathname = usePathname();
  return (
    <aside className="portal-nav">
      <div className="portal-nav__brand"><Brand /><span>Preprod</span></div>
      <nav aria-label="Workspace navigation">
        <p>Workspace</p>
        {links.map((link) => {
          const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
          return <Link key={link.href} href={link.href} className={active ? "active" : ""}><Icon name={link.icon} />{link.label}</Link>;
        })}
      </nav>
      <div className="portal-nav__footer">
        <div className="network-state"><i />Midnight Preprod</div>
        <span title="Deployed Green Proof contract">{GREEN_PROOF_CONTRACT_SHORT}</span>
        <Link href="/verify">Public verifier <Icon name="external" /></Link>
      </div>
    </aside>
  );
}
