import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaavnPlyr",
  description: "Generated by SaavnPlyr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className="dark text-foreground bg-background"><Providers>{children}</Providers></body>
      
    </html>
  );
}
