// "use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/app/sections/header";
import Footer from "@/app/sections/footer";
import ToastProvider from "@/app/components/toast-provider";

const poppins = Poppins({
  weight: ["400", "500", "600"], // Choose the weights you need
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Assetium Group",
  description: "Assetium - Your Bridge to Value",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F1F1F1]">
      <body className={`${poppins.className} mx-auto max-w-screen-3xl`}>
        <script defer src="https://analytics.assetium.com/script.js" data-website-id="842f1975-71f8-4f32-b448-68d79e17ca45"></script>
        <Header />
        <div>{children}</div>

        {/* <CommodityBar /> */}
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
