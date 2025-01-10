import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Consulife",
  description:
    "Consulife is a mental health platform that provides quick and easy access to professional psychologists. Our mission is to help you maintain emotional balance and well-being through a modern approach that incorporates Artificial Intelligence (AI). With AI technology, Consulife offers an initial mental health assessment to help you understand your condition before connecting with a psychologist. We believe that everyone deserves the right mental health support, anytime and anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className={` bg-secondary-custom_secondary `}>
        {children}
        <Toaster className="-right-10" />
      </body>
    </html>
  );
}
