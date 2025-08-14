import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Mera Halwai",
  description: "Mera Halwai - Become a vendor",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
