import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
      <body className={`${poppins.variable} font-poppins`} >

        <div>

          {/* component Sibedar */}

        </div>

        <div className="flex flex-col">
          <NavBar />
          {children}
        </div>

      </body>
    </html>
  );
}