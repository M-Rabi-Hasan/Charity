// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header"; // Make sure this path is correct
import "./globals.css";

export const metadata: Metadata = {
  title: "Charity Website",
  description: "A professional charity website built with Next.js and custom CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* This should render your Header component */}
        {children}
      </body>
    </html>
  );
}
