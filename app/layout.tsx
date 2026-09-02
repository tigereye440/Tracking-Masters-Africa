import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "TMA — Tracking Masters Africa",
  description:
    "Vehicle tracking, CCTV, electric fencing, automatic doors and solar power installation across Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
