import { PublicHeader } from "@/components/public-header";
import { VerifyForm } from "@/components/verify-form";

export default function VerifyPage() {
  return <main className="verify-page"><PublicHeader /><section className="verify-hero"><p className="eyebrow"><span />Public verification</p><h1>Check a product claim.</h1><p>Enter 32-byte batch ID from Midnight Preprod. Result comes from live public contract state.</p><VerifyForm /><div className="example-link">No sample data. Use batch ID from the live ledger.</div></section><section className="verify-explainer"><article><span>✓</span><h2>What you can verify</h2><p>Compliance status, public requirement, hashes, lab ID, and proof commitment.</p></article><article><span>▓</span><h2>What stays private</h2><p>Exact recycled content, recipe, raw report, sources, and certificate signature.</p></article></section></main>;
}
