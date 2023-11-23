import DashboardContent from "@/components/dashboard/dashboardContent";
import DashboardHeader from "@/components/dashboard/dashboardHeader";

export default function Home() {
  return (
    <main className="max-w-[1115px] flex flex-col items-center justify-between flex-1 min-h-screen mx-auto p-8 lg:p-16">
      <DashboardHeader />
      <DashboardContent />
    </main>
  );
}
