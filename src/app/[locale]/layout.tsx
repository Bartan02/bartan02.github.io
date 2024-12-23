import "../ui/globals.css";
import { interTight } from "@/app/ui/fonts";
import Providers from "@/app/[locale]/providers";
import { Metadata } from "next";

const LOCALES = ["en", "nl", "fr", "pl"];

export async function generateStaticParams() {
    return LOCALES.map((locale) => ({
    locale,
    }));
}

// Dynamically import needed messages for given locale
async function getMessages(locale: string) {
    const messageModule = await import(`../../public/locales/${locale}/common.json`);

    return messageModule.default;
}

export const metadata: Metadata = {
    title: "Bartosz Adamczyk",
    description: "Bartosz Adamczyk's portfolio page",
    icons: {
      icon: '/favicon.ico',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({
    children, params
}: RootLayoutProps) {
  const messages = await getMessages((await params).locale);
    return (
        <html lang={(await params).locale}>
            <Providers messages={messages} locale={(await params).locale}>
                <body
                    className={`${interTight.className} antialiased`}
                    suppressHydrationWarning={true}
                >
                    {children}
                </body>
            </Providers>
        </html>
    );
} 
