import Link from "next/link";

import { PublicHeader } from "@/components/public-header";
import { VerifyForm } from "@/components/verify-form";

export default function VerifyPage() {
  return <main className="verify-page"><PublicHeader /><section className="verify-hero"><p className="eyebrow"><span />Public verification</p><h1>Check a product claim.</h1><p>Enter batch ID printed beside Green Proof QR code. Result comes from public Midnight contract state.</p><VerifyForm /><div className="example-link">Try demo: <Link href="/verify/A-1042">A-1042</Link></div></section><section className="verify-explainer"><article><span>✓</span><h2>What you can verify</h2><p>Compliance status, public requirement, trusted lab, proof reference, and validity.</p></article><article><span>▓</span><h2>What stays private</h2><p>Exact recycled content, recipe, raw report, sources, and certificate signature.</p></article></section></main>;
}
