import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/navigator/nav";
import Footer from "@/components/Home/footer";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/store/storeProvider";
// import { store } from "../store/store";
// import { Provider } from "react-redux";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cino",
    description: "Cino e-commerce website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <StoreProvider>
                <html lang="en">
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <Nav />
                        {children}
                        <Footer />
                    </body>
                </html>
            </StoreProvider>
        </ClerkProvider>
    );
}
