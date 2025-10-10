import { Saira } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Fooder from "./Fooder/Footer";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-saira",
});

export const metadata = {
  title: "Sojibur Asif",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${saira.variable} antialiased`}>
        <Header />
        {children}
        <Fooder />
      </body>
    </html>
  );
}
