import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/layout/main-nav";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "COMFAGUAJIRA Chatbot MVP",
  description: "Demo comercial frontend-only para asistente virtual multicanal."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-manrope)] antialiased`}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
