"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";

function Providers({
    children,
    locale,
    messages,
}: {
    children: React.ReactNode;
    locale: string;
    messages: Record<string, string>;
}) {
    return (
        <NextIntlClientProvider timeZone={"Europe/Amsterdam"} locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}

export default Providers;