import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "components/Header";
import SideBar from "components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPC Rest API",
  description: "App para conexão com o servidor Rest do PCP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
