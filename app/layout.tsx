'use client'
import "./globals.css";
import '../tailwind/global.css'
import { Banner, Footer, Header } from "@/components";
import {  usePathname } from "next/navigation";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname()
  const searchPage=pathname==='/search'
  const params= new URLSearchParams()

  
  return (
    <html lang="en">

      <body>
      <Header/>
        {!searchPage&& <Banner/>}

        {children}
        {/* footer */}
       <Footer/>
        </body>
    </html>
  );
}
