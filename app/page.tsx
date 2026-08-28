import Link from "next/link";

import { Brand } from "@/components/brand";
import { PublicHeader } from "@/components/public-header";

export default function HomePage() {
  return (
    <main className="marketing-page">
      <PublicHeader />
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow"><span />Private sustainability evidence</p>
          <h1>Prove the claim.<br /><em>Keep the recipe.</em></h1>
          <p className="hero-lede">
            Green Proof turns a trusted lab result into a public recycled-content
            verdict. Buyers see whether requirement is met—not supplier&apos;s exact
            percentage, sources, or material composition.
          </p>
          <div className="action-row">
            <Link className="button button--primary" href="/verify">Verify batch</Link>
            <Link className="button button--quiet" href="/portal">Open workspace <span>→</span></Link>
          </div>
          <ul className="trust-line" aria-label="System guarantees">
            <li>Lab signed</li><li>Zero knowledge</li><li>Publicly verifiable</li>
          </ul>
        </div>

        <div className="proof-object" aria-label="Redacted lab report transformed into compliant verdict">
          <div className="proof-object__tab">Private input</div>
          <article className="report-card">
            <header><span>Material analysis</span><span>GP / A-1042</span></header>
            <dl>
              <div><dt>Supplier</dt><dd><i className="redact redact--wide" /></dd></div>
              <div><dt>Composition</dt><dd><i className="redact" /></dd></div>
              <div><dt>Recycled content</dt><dd><i className="redact redact--short" /></dd></div>
              <div><dt>Required</dt><dd>≥ 50%</dd></div>
            </dl>
            <footer><span>Lab #0092</span><span>Signed 10 Aug 2026</span></footer>
            <div className="proof-stamp"><b>✓</b><span>Compliant</span><small>Verified on Midnight</small></div>
          </article>
          <div className="proof-object__note">Only this verdict becomes public</div>
        </div>
      </section>

      <section className="home-process" aria-labelledby="process-title">
        <div className="home-process__intro">
          <p className="section-label">How proof moves</p>
          <h2 id="process-title">One disclosure boundary.</h2>
          <p>Raw result enters proof locally. Only compliance outcome reaches ledger.</p>
        </div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Lab signs evidence</h3><p>Actual percentage and batch identity are cryptographically bound.</p></div><small>Private</small></li>
          <li><span>02</span><div><h3>Circuit checks evidence</h3><p>Trusted lab, expiry, replay, and threshold checks run together.</p></div><small>Midnight</small></li>
          <li><span>03</span><div><h3>Public reads verdict</h3><p>Buyer or shopper sees badge, lab, validity, and proof reference.</p></div><small>Public</small></li>
        </ol>
      </section>

      <section className="home-cta">
        <div><p className="section-label">Read-only verification</p><h2>Check any batch without wallet.</h2></div>
        <Link className="button button--inverse" href="/verify">Open verifier →</Link>
      </section>

      <footer className="public-footer">
        <Brand />
        <span>Verification without disclosure</span>
        <span>Built for Midnight</span>
      </footer>
    </main>
  );
}
