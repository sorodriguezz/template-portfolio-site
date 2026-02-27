import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sorodriguezz | Software Engineer",
  description:
    "Portafolio profesional de Sebastián Rodríguez Zapata — Ingeniero de Software orientado a la arquitectura de software, especializado en sistemas distribuidos, microservicios y soluciones cloud-native.",
  keywords: [
    "Software Engineer",
    "Software Architecture",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Cloud Native",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
