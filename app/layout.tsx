// importing from next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// importing stylesheet
import "./globals.css";
// importing components
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import { Support } from "@/components/sections/support";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Verge CA",
    description: "Verge CA is Live Comprehensive & Time Management Revision App covering all Institute Materials at one place.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <Support />
                <div className="min-h-[50vh]">
                    {children}
                </div>
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
