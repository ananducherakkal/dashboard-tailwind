import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import WebsiteTrafficChart, {
  WebsiteTrafficChartData,
} from "./websiteTrafficChart";
import Button from "../ui/button";

const data: Array<WebsiteTrafficChartData> = [
  { id: 1, color: "#968C88", value: 4500, label: "Social Media" },
  { id: 2, color: "#36373E", value: 8000, label: "Organic search" },
];

function DashboardCard1() {
  return (
    <DashboardCardWrapper>
      <div className="w-full flex items-start">
        <h2 className="font-bold text-text text-lg mr-auto">Website Traffic</h2>
        <Button
          variant="transparent"
          className="font-semibold text-text hover:text-text-secondary active:text-text-secondary/80"
          size="sm"
        >
          More
        </Button>
      </div>
      <WebsiteTrafficChart data={data} />
    </DashboardCardWrapper>
  );
}

export default DashboardCard1;
