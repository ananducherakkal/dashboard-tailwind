import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import WebsiteTrafficChart, {
  WebsiteTrafficChartData,
} from "./websiteTrafficChart";

function DashboardCard1() {
  const data: Array<WebsiteTrafficChartData> = [
    { id: 1, color: "#968C88", value: 80 },
    { id: 2, color: "#36373E", value: 45 },
    // { id: 3, color: "#B5D5E1", value: 56 },
  ];
  return (
    <DashboardCardWrapper>
      <div className="w-full flex items-start">
        <div className="font-bold text-text text-lg mr-auto">
          Website Traffic
        </div>
        <div className="text-text">More</div>
      </div>
      <WebsiteTrafficChart data={data} className="w-32 h-32 mt-4 mx-auto" />
      <div className="flex flex-col text-text mt-4">
        <div className="h-10 flex items-center">
          <div className="h-6 w-6 bg-gray-40 rounded-sm mr-3"></div>
          <div className="text-base font-semibold">Social Media</div>
        </div>
        <div className="h-10 flex items-center">
          <div className="h-6 w-6 bg-gray-80 rounded-sm mr-3"></div>
          <div className="text-base font-semibold">Organic Search</div>
        </div>
      </div>
    </DashboardCardWrapper>
  );
}

export default DashboardCard1;
