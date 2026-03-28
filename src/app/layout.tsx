import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
