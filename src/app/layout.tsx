import type { Metadata } from "next";
import { Bodoni_Moda, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pluck.media — There's business you're missing. We'll find it.",
  description:
    "Pluck helps specialist and high-value B2B businesses find customers they're missing through commercial research, targeted digital campaigns and expert execution.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${montserrat.variable} ${baskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
