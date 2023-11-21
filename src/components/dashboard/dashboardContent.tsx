import React from "react";
import DashboardCard1 from "./dashboardCard1";
import DashboardCard2 from "./dashboardCard2";

function DashboardContent() {
  return (
    <div className="w-full flex-1 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <DashboardCard1 />
      <DashboardCard2 />
      <DashboardCard1 />
      <DashboardCard1 />
      <DashboardCard1 />
      <DashboardCard1 />
    </div>
  );
}

export default DashboardContent;
