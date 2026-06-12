import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OnConcilia — Conciliación bancaria automatizada para pymes argentinas",
  description:
    "Automatizá la conciliación bancaria. Importás el extracto, el sistema cruza los movimientos y genera el reporte. En minutos, no en horas.",
  openGraph: {
    title: "OnConcilia — Conciliación bancaria automatizada",
    description:
      "Dejá de hacer la conciliación bancaria en Excel. OnConcilia lo hace en minutos.",
    url: "https://onconcilia.com",
    siteName: "OnConcilia",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
