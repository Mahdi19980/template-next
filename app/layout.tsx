import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
import LayoutProvider from "../components/layout/LayoutProvider";

export const metadata: Metadata = {
  title: "Fava-Gostar-Sepehr",
  description: "this is example site",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-4  min-h-screen">
        <LayoutProvider>
          <header>
            <NavBar />
          </header>
          <main className="grow">{children}</main>

          <footer className="border-t py-3 text-center text-xs">
            this is footer components in this site
          </footer>
        </LayoutProvider>
      </body>
    </html>
  );
}
