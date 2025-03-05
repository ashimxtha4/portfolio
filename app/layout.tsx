import ScrollAnimation from "@/component/animatedCard";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import logo from "@/public/ASHIM-remove.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin", "cyrillic", "greek"] });

export const metadata: Metadata = {
  title: "Ashim Raj Shrestha",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" /> */}
      </head>
      <body className={inter.className}>
        <header className="navigation">
          <div className="container">
            <div className="logo">
              <Image className="logoImg" src={logo} alt="logo" />
            </div>
            <div className="routes">
              <Link href="/" className="navLink">
                Home
              </Link>
              <Link href="about" className="navLink">
                About
              </Link>
              <Link href="works" className="navLink">
                Works
              </Link>
              <Link href="contact" className="navLink">
                Contact
              </Link>
            </div>
            <Link
              className="letsTalk"
              href="./AshimResume.pdf"
              target="_blank"
              download=""
            >
              {"Let's talk"}
            </Link>
          </div>
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footerLogo">
              <Image className="logoImg" src={logo} alt="logo" />
            </div>
            <div className="routes">
              <Link href="/" className="navLink">
                Home
              </Link>
              <Link href="about" className="navLink">
                About
              </Link>
              <Link href="works" className="navLink">
                Works
              </Link>
              <Link href="contact" className="navLink">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
