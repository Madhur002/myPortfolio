import type { Metadata } from "next";
import CustomCursor from "@/components/common/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrolling from "./SmoothScrolling";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhur Sharma",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
