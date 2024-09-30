import { Rubik } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Nextjs with Recharts by Franco Lloveras",
  description: "A simple example of use Nextjs with Recharts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
