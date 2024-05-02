import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World Countries",
  description: "Awesome list of world countries",
};

function TopNavbar() {
  return (
    <div className="bg-slate-900 border-b">
      <Link href="/">
        <div className="text-4xl font-bold text-center p-4">
          World Countries
        </div>
      </Link>
    </div>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
