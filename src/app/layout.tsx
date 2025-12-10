import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawid Pruski",
  description: "Dawid Pruski website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
