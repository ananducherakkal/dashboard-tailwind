import React from "react";
import DashboardCard1 from "./dashboardCard1";
import DashboardCard2 from "./dashboardCard2";
import DashboardCard3 from "./dashboardCard3";
import DashboardCard4 from "./dashboardCard4";
import DashboardCard5 from "./dashboardCard5";
import DashboardCard6 from "./dashboardCard6";

function DashboardContent() {
  return (
    <div className="w-full flex-1 pt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      <DashboardCard1 />
      <DashboardCard2 />
      <DashboardCard3 />
      <DashboardCard4 />
      <DashboardCard5 />
      <DashboardCard6 />
    </div>
  );
}

export default DashboardContent;
