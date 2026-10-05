import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FMC Bida | Community Healthcare Library",
  description: "Department of Community Healthcare digital resource library.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
