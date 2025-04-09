import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, WeatherProvider } from "@/context";
import { AppBar, ReactQueryProvider } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wetter App",
  description: "Next.js App zur Anzeige von Wetterdaten. Coding-Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <React.StrictMode>
          <ThemeProvider>
            <ReactQueryProvider>
              <WeatherProvider>
                <AppBar />
                {children}
              </WeatherProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
