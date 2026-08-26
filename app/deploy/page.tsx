import type { Metadata } from "next";

import { PublicHeader } from "@/components/public-header";

import DeployClient from "./deploy-client";

export const metadata: Metadata = {
  title: "Green Proof deployment — Midnight preprod",
  description: "View and connect to the Green Proof contract on Midnight preprod.",
};

export default function DeployPage() {
  return (
    <main className="deploy-page">
      <PublicHeader />
      <section className="deploy-shell">
        <div className="deploy-intro">
          <p className="eyebrow"><span />Midnight preprod</p>
          <h1>Deployment is live.</h1>
          <p>The canonical Green Proof contract is active on Midnight preprod. Connect 1AM to use authenticated contract operations.</p>
          <ol>
            <li><b>01</b><span>Verify the canonical contract address</span></li>
            <li><b>02</b><span>Connect 1AM on preprod</span></li>
            <li><b>03</b><span>Continue to the operator workspace</span></li>
          </ol>
        </div>
        <DeployClient />
      </section>
    </main>
  );
}
