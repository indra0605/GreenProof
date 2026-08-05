import Link from "next/link";

import { Brand } from "@/components/brand";

export default function BatchNotFound() {
  return <main className="not-found-page"><Brand /><div><span>Not found</span><h1>No batch record.</h1><p>Check batch ID printed on product. A missing record does not prove compliance.</p><Link className="button button--primary" href="/verify">Try another ID</Link></div></main>;
}
