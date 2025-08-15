import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sideware = localFont({
  src: [
    {
      path: '../../public/fonts/sidewaretrialregular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sideware',
  display: 'swap',
});

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
  display: 'swap',
});

export const metadata = {
  title: "Mera Halwai",
  
  description: "Mera Halwai - Become a vendor",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sideware.variable} ${helvetica.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/sidewaretrialregular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/bg-khana1.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/bg-khana2.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`bg-white antialiased`}
      >
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
