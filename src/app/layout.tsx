import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nuceria Health | Miami's Premier Wellness & Aesthetics Center",
  description: "Feel like yourself again with Miami's premier hormone replacement therapy, medical weight loss, IV therapy, and aesthetics center. Book your free consultation today.",
  keywords: ["HRT", "hormone therapy", "weight loss", "IV therapy", "aesthetics", "Miami", "wellness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
