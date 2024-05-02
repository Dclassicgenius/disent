import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World Countries",
  description: "Awesome list of world countries",
};

function TopNavbar() {
  return (
    <div className="bg-slate-800 border-b">
      <h1 className="text-4xl font-bod text-center p-4">World Countries</h1>
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
