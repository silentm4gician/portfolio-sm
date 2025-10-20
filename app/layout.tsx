import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro González Matkovich | Web Developer",
  description:
    "Portfolio of Leandro González Matkovich - Freelance Web Developer specializing in Next.js, React.js, and Tailwind CSS",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Leandro González Matkovich | Web Developer",
    description:
      "Portfolio of Leandro González Matkovich - Freelance Web Developer specializing in Next.js, React.js, and Tailwind CSS",
    url: "https://silentm4gician.netlify.app", // Replace with your actual domain
    siteName: "Leandro González Matkovich Portfolio",
    images: [
      {
        url: "/logo.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Leandro González Matkovich - Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro González Matkovich | Web Developer",
    description:
      "Portfolio of Leandro González Matkovich - Freelance Web Developer specializing in Next.js, React.js, and Tailwind CSS",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
