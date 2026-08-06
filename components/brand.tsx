import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Green Proof home">
      <span className="brand__mark" aria-hidden="true">✓</span>
      {!compact && <span>Green Proof</span>}
    </Link>
  );
}
