import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: "400"
})

export const metadata: Metadata = {
  title: "home",
  description: "RecruPay",
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
        {children}
      </body>
    </html>
  );
}