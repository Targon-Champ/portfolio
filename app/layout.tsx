import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";






export const metadata: Metadata = {
  title: "SriSatyaSaiImmani",
  description: "Professional Software Engineer with a passion to solve complex problems, mainly focusing on System Design, Distributed Systems, Backend Development, and GPU Programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
