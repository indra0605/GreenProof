import type { ReactNode } from "react";

import { PortalHeader } from "@/components/portal-header";
import { PortalNav } from "@/components/portal-nav";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <PortalNav />
      <div className="app-main"><PortalHeader /><main className="app-content">{children}</main></div>
    </div>
  );
}
