export type Status = "Compliant" | "Non-compliant" | "Pending" | "Revoked" | "Inactive" | "Active";

export function StatusBadge({ status }: { status: Status }) {
  const slug = status.toLowerCase().replace("-", "");
  return <span className={`status-badge status-badge--${slug}`}><i />{status}</span>;
}
