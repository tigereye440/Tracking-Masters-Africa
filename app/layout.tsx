import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import StructuredData from "@/components/seo/StructuredData";
import { buildOrganizationSchema } from "@/lib/seo/organization-schema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TMA — Tracking Masters Africa",
    template: "%s | TMA",
  },
  description:
    "Vehicle tracking, CCTV, electric fencing, automatic doors and solar power installation across Ghana.",
  openGraph: {
    type: "website",
    siteName: "Tracking Masters Africa",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={buildOrganizationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}