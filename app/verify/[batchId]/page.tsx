import Link from "next/link";
import { notFound } from "next/navigation";

import { Brand } from "@/components/brand";
import { GREEN_PROOF_CONTRACT_ADDRESS, GREEN_PROOF_CONTRACT_SHORT } from "@/lib/contract-config";

const known: Record<string, { product: string; requirement: string; lab: string; verified: string; validUntil: string; proof: string }> = {
  "A-1042": { product: "OceanForm Packaging", requirement: "≥ 50% recycled material", lab: "Circular Materials Lab #0092", verified: "10 Aug 2026", validUntil: "10 Aug 2027", proof: "9f3a8b21…c71e930d" },
  "E-4011": { product: "LoopLine Crate", requirement: "≥ 65% recycled material", lab: "Nordic Polymer Institute #0144", verified: "02 Aug 2026", validUntil: "02 Aug 2027", proof: "6d91fa03…a831c20b" },
};

export default async function BatchVerificationPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = await params;
  const id = decodeURIComponent(batchId).toUpperCase();
  const record = known[id];
  if (!record) notFound();
  return <main className="result-page"><header className="result-header"><Brand /><Link href="/verify">Verify another batch</Link></header><section className="result-card"><div className="result-seal"><span>✓</span></div><p className="result-label">Green Proof verified</p><h1>Compliant</h1><p className="result-summary">This batch meets its declared recycled-content requirement.</p><div className="result-rule"><span>Public requirement</span><strong>{record.requirement}</strong></div><dl><div><dt>Batch</dt><dd>{id}</dd></div><div><dt>Product</dt><dd>{record.product}</dd></div><div><dt>Verified by</dt><dd>{record.lab}</dd></div><div><dt>Verified on</dt><dd>{record.verified}</dd></div><div><dt>Valid until</dt><dd>{record.validUntil}</dd></div><div><dt>Proof reference</dt><dd className="mono-muted">{record.proof}</dd></div><div><dt>Contract</dt><dd className="mono-muted" title={GREEN_PROOF_CONTRACT_ADDRESS}>{GREEN_PROOF_CONTRACT_SHORT}</dd></div></dl><aside><b>Exact composition remains private.</b><p>Zero-knowledge proof confirms actual recycled content meets or exceeds public requirement.</p></aside></section><footer className="result-footer"><span title={GREEN_PROOF_CONTRACT_ADDRESS}>Contract {GREEN_PROOF_CONTRACT_SHORT}</span><span>Preprod · Public · Read-only</span></footer></main>;
}
