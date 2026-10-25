import "./globals.css";
import UserNav from "@/components/layout/UserNav";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  title: "Credoe Talent Solutions",
  description:
    "Executive search and talent acquisition solutions for exceptional organizations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <UserNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
