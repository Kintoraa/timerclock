import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Timer Clock",
  description: "crée by kintora",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster richColors></Toaster>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col items-center pt-12",
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
