import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan & Artemis Wedding",
  description: "Join us in celebrating the wedding of Ethan and Artemis on July 3, 2027 in Vouliagmeni, Greece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col pt-20 relative">
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.png')" }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
