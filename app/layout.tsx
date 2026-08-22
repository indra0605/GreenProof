import type { Metadata } from "next";
import { WalletSessionProvider } from "@/components/wallet-session";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Proof — Verified without disclosure",
  description: "Private recycled-content verification built for Midnight.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><WalletSessionProvider>{children}</WalletSessionProvider></body>
    </html>
  );
}
