import Sidebar from "@/components/sidebar/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex relative overflow-visible">
      <Sidebar />
      {children}
    </div>
  );
}
