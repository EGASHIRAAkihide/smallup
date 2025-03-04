import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

export const metadata: Metadata = {
  title: "SMALLUP",
  description: "todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
