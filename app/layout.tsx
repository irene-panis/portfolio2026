import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

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
        className={`${manrope.variable} h-full overflow-hidden bg-background text-foreground font-sans antialiased`}
      >
        <div className="mx-auto flex h-full w-full max-w-xl flex-col gap-12 items-center px-6 pt-12 md:pt-24">
          <Link href="/" className="group self-start">
            <Image
              src="/icon.svg"
              alt="Home"
              width={50}
              height={50}
              className="shrink-0 transition-transform duration-500 group-hover:rotate-180"
            />
          </Link>

          <main className="flex-1 overflow-y-auto scrollbar-none pb-24">
            {children}
          </main>
          <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </body>
    </html>
  );
}
