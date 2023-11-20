import DashboardContent from "@/components/dashboard/dashboardContent";
import DashboardHeader from "@/components/dashboard/dashboardHeader";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between flex-1 min-h-screen p-8 md:p-16">
      <DashboardHeader />
      <DashboardContent />
    </main>
  );
}
