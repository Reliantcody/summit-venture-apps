import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Summit Venture Apps",
  description: "Gated demo portal for Summit Venture app projects.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
