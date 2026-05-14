import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  metadataBase: new URL(brand.productionUrl),
  title: `${brand.productName} | ${brand.koreanName}`,
  description: brand.description,
  openGraph: {
    title: `${brand.productName} | ${brand.koreanName}`,
    description: brand.description,
    url: brand.productionUrl,
    siteName: brand.koreanName,
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.productName} | ${brand.koreanName}`,
    description: brand.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
