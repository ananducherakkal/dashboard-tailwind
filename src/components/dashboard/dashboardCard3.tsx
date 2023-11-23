import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import Button from "../ui/button";
import UpRightArrowIcon from "../icons/upRightArrow";
import BounceRateDate from "./bounceRateDate";
import BounceRateSummary from "./bounceRateSummary";

function DashboardCard3() {
  return (
    <DashboardCardWrapper className="bg-gray-30">
      <div className="flex items-start">
        <h2 className="font-bold text-lg mr-auto text-text">Bounce Rate</h2>
        <Button variant="secondary" className="rounded-full">
          <UpRightArrowIcon className="w-6 h-6" />
        </Button>
      </div>
      <BounceRateDate />
      <BounceRateSummary />
    </DashboardCardWrapper>
  );
}

export default DashboardCard3;
