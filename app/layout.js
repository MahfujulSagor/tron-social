import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Tron-Social",
  description: "The best social network in the world",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"><Navbar/></div>
          <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
