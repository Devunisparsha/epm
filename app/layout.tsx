import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "./components";

export const metadata: Metadata = {
  title: "Epaphras Ministries | A Life of Example",
  description:
    "Dedicated to serving communities and sharing the transformative power of faith since 1998. Join us for worship and spiritual growth.",
  keywords: [
    "Epaphras Ministries",
    "Church Hyderabad",
    "Spiritual Growth",
    "Worship",
    "Faith",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
