import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Emperor6inch Defense | Advanced Security Solutions for West Africa",
    description: "Innovative defense technology protecting West Africa. Drones, armored vehicles, and maritime security solutions.",
    keywords: ["West Africa defense tech", "anti-terrorism drones Nigeria", "maritime security Gulf of Guinea", "Emperor6inch"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
