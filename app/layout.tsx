import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner, Footer, Header } from "@/components";


export const metadata: Metadata = {
  title: "AirBnb",
  description: "airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Header/>
      <Banner/>

        {children}
        {/* footer */}
        <Footer/>
        </body>
    </html>
  );
}
