import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FixedBg from "@/components/FixedBg";
import FixedSocialMediaBtn from "@/components/FixedSocialMediaBtn";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TTcitadel",
  description: "NGO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} flex flex-col min-h-screen relative `}
      >
        <FixedBg />
        <FixedSocialMediaBtn />
        <NavBar />
        <main className="flex flex-grow overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
