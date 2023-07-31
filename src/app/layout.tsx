import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy Software Online with 1+ Lakh Trusted Software Reviews",
  description:
    "Techjockey Helps Million of Businesses to Buy the Best Software Online in India. 15000+ Software, 5500+ Vendors, 600+ Categories, 1+ Lakh Verified Reviews.",
  keywords:
    "Buy software online, Buy business software, find and compare features, b2b business solutions, software deals and offers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
