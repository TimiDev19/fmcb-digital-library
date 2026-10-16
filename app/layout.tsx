import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FMC Bida | Community Health Digital Library",
  description:
    "A comprehensive digital repository advancing public health through accessible data, peer-reviewed literature, and community wellness initiatives",
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
