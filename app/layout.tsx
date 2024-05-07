"use client";
import "./globals.css";
import "../tailwind/global.css";
import { Banner, Footer, Header } from "@/components";
import { usePathname } from "next/navigation";

import ProgressBar from "@badrap/bar-of-progress";
import { useRouter } from "next/router";
import { useEffect } from "react";

const progress = new ProgressBar({
  size: 8,
  color: "#FE595E",
  className: "z-50",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const searchPage = pathname === "/search";
  useEffect(() => {
    if (pathname !== "/") {
      progress.start();
    }
    setTimeout(() => {
      progress.finish();
    }, 1500);

    return () => {};
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Header />
        {!searchPage && <Banner />}

        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
