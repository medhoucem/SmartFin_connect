import type { Metadata } from "next";
import { Inter ,IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','700'],
  Variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Smartfin Connect",
  description: "Smartfin Connect is a modern banking platform for evreyone",
  icons :{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
