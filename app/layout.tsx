import Whatsapp from "@/components/Contact";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Dizgin Rent a Car",
  description: "Discover the best cars in the world",
  keywords: "cyprus rent a car, cars, rent, rent a car",
  icons: {
    icon: "/dizgin.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className="relative" suppressHydrationWarning> 
      <Navbar /> 
      {children}
      <Footer />
      <Whatsapp />
      </body>
    </html>
  );
}
