'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import ClientProvider from "@/providers/ClientProvider";
import { useMemo } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isAuthPage = ['/pages/auth/login', '/pages/auth/signup'].includes(pathname);
  
  // Generate dynamic metadata based on the current pathname
  const pageTitle = useMemo(() => {
    const formattedPath = pathname
      .replace(/-/g, ' ') // Replace dashes with spaces
      .replace(/\//g, '') // Remove leading/trailing slashes
      .toUpperCase(); // Capitalize for title
    return formattedPath || "Home"; // Default to "Home" for root
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>{pageTitle} - Brass Business Banking</title>
        <meta name="description" content={`Welcome to the ${pageTitle} page of Brass Business Banking`} />
      </head>
      <ClientProvider>
        <body>
          {!isAuthPage && <Header />}
          <main className={isAuthPage ? 'w-full' : 'lg:mt-28 sm:mt-[39%] w-full'}>
            {children}
          </main>
        </body>
      </ClientProvider>
    </html>
  );
}
