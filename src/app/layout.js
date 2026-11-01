import "./globals.css";
import UserNav from "@/components/layout/UserNav";
import SiteFooter from "@/components/layout/SiteFooter";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata = {
  title: "Credoe Talent Solutions",
  description:
    "Executive search and talent acquisition solutions for exceptional organizations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${bodoni.variable} flex min-h-full flex-col`}>
        <UserNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
