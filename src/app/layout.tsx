import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Coinersho",
  description: "Decamond auth-task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
