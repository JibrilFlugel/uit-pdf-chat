import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uit-pdf-chat.vercel.app"),
  title: "UIT Chat",
  description:
    "Knowledge Base using Retrieval Augmented Generation and Middleware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
