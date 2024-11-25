import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/AuthProvider";
import Header from "@/components/custom/header";
import { Toaster } from "@/components/ui/sonner";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Header />
          {children}
        </body>
        <Toaster />
      </AuthProvider>
    </html>
  );
}
