import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwi Raysah Anandifa Kautsar | Portfolio",
  description: "Software Engineering Student & Cybersecurity Enthusiast Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CursorGlow />
          <div className="bg-blobs" />
          <Navbar />
          <main className="flex-grow pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10">
            {children}
          </main>
          
          {/* Fixed Theme Toggle Bottom Right */}
          <div className="fixed bottom-12 right-6 md:bottom-8 md:right-8 z-50">
             <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
