// src/app/layout.js
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Fooder from "./Fooder/Footer";
import ThemeProvider from "./Components/ThemeProvider";



const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});

export const metadata = {
  title: "Sojibur Asif",
  description: "Personal Portfolio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

      </head>
      <body className={`${saira.variable} antialiased bg-black text-white`}>


        <ThemeProvider>
          <Header />
          {children}
          <Fooder />
        </ThemeProvider>
      </body>
    </html>
  );
}
