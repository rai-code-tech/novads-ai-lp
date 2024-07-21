import React, { ReactNode } from "react";
import "@/styles/tailwind.css";
import "@/styles/index.css";
import "@/styles/font.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { GoogleTagManager } from "@next/third-parties/google";
import { OpenpanelProvider } from "@openpanel/nextjs";

async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale ?? "en"}>
      <GoogleTagManager gtmId="GTM-MRL49VD4" />
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OpenpanelProvider
          clientId="66c5591b-147e-4023-82e9-7f7eeda873aa"
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
