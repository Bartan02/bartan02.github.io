import type { Metadata } from "next";
import "./ui/globals.css";
import {interTight} from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Bartosz Adamczyk",
  description: "Bartosz Adamczyk's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
