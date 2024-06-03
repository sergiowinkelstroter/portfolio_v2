import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio || Sergio Winkelstroter",
  description: "",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <TooltipProvider>
          {" "}
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
