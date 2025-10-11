// src/app/layout.js (server component)
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Fooder from "./Fooder/Footer";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});

// ✅ metadata with proper icons
export const metadata = {
  title: "Sojibur Asif",
  description: "Personal Portfolio",
  icons: {
    icon: "/logo.png",        // must be inside public folder
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
