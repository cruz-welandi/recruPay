import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import {Ubuntu} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: "400"
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: "--font-ubuntu",
  weight: '500'
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
      <body className={` ${poppins.variable} ${ubuntu.variable} font-poppins flex `} >

        <SideBar/>

        <div className="flex flex-col flex-auto ">
          
          <NavBar />
          <div className="bg-[#f3f1f1] h-[89.7vh] w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}