import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import { BarChart } from "./customerChurnBarGraph";

const data = [
  { label: "50-100", value: 320 },
  { label: "100-200", value: 530 },
  { label: "250-500", value: 250 },
  { label: ">500", value: 510 },
];

function DashboardCard6() {
  return (
    <DashboardCardWrapper className="bg-gray-70">
      <h2 className="font-bold text-lg mr-auto text-text-light">
        Customer Churn Rate
      </h2>
      <BarChart data={data} />
    </DashboardCardWrapper>
  );
}

export default DashboardCard6;
