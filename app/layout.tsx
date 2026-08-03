import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Proof — Verified without disclosure",
  description: "Private recycled-content verification built for Midnight.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
