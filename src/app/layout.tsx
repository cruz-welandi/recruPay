import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

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
      <body className={`${poppins.variable} font-poppins flex`} >

        <div>

        <SideBar/>

        </div>

        <div className="flex flex-col flex-auto ">
          
          <NavBar />
      
          {children}
        </div>

      </body>
    </html>
  );
}