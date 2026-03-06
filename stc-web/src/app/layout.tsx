import type { Metadata } from "next";
import "./globals.css";
import "./pixel.css";

export const metadata: Metadata = {
  title: "Solutions Treatment Center",
  description: "STC homepage mockup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
