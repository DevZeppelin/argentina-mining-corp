import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HR Minerales y Fibras",
  description: "Minerales y fibras para la industria petrolera y perforación de agua",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Hugo Ramírez | Minerales y Fibras Industriales
        </title>
        <meta
          name="description"
          content="Proveedor de minerales y fibras industriales para perforación e industria. Exportación al Cono Sur."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
