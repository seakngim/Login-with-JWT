import HeaderComponent from "@/components/navbar/HeaderComponent ";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent ";
import { Suspense } from "react";
import Loading from "./loading";
import { inter, suwannaphum, localCustomFont } from "./fonts";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'ISTAD Ecommerce Web',
  description: 'ISTAD Ecommerce Web is a web application for selling products',
  openGraph: {
    title: 'ISTAD Ecommerce Web',
    description: 'ISTAD Ecommerce Web is a web application for selling products',
    images:''

  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/website/css/uicons-so" rel="stylesheet" />
      </head>
      <body className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable}`}>
        {/* header */}
        <aside>
          <HeaderComponent />
        </aside> 
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        {/* footer */}
        <FooterComponent />
      </body>
    </html>
  );
}
