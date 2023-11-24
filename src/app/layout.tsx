import { cookies } from "next/headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Tailwind",
  description: "Sample website for dashboard with tailwind",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayout) {
  const { children } = props;

  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value || "dark";

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
