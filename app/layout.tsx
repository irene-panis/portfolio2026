import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "irene panis | software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${manrope.variable} h-full bg-background text-foreground font-sans antialiased`}
      >
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />
        <div className="mx-auto flex h-full w-full max-w-xl flex-col gap-12 px-6 pt-12 md:pt-24">
          <Link href="/" className="group self-start">
            <Image
              src="/icon.svg"
              alt="Home"
              width={50}
              height={50}
              className="shrink-0 transition-transform duration-500 group-hover:rotate-180"
            />
          </Link>

          <main className="flex-1 scrollbar-none pb-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
