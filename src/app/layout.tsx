import "@/style/globals.css";
import type { Metadata } from "next";
import { primaryFont } from "@/style/fonts";

export const metadata: Metadata = {
  title: "Cory Bell",
  description: "Full stack developer. Independent software contractor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
