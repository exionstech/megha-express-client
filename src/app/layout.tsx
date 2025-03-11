import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Providers } from "@/providers/provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Megha Express",
  description: "Your best delivery partner",
  icons: {
    icon: "/fav.svg",
    apple: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={cn(
          poppins,
          "font-poppins antialiased w-full h-full min-h-screen scroll-smooth mx-auto"
        )}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
