import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import Button from "../ui/button";
import DocumentDownloadIcon from "../icons/documentDownload";
import BarGraphIcon from "../icons/barGraph";
import Image from "next/image";

function DashboardCard4() {
  return (
    <DashboardCardWrapper className="bg-gray-70">
      <div className="flex items-center">
        <Button
          variant="secondary"
          className="w-10 h-10 p-2 bg-gray-60 hover:bg-gray-60/10 active:bg-gray-60/20 mr-3"
        >
          <BarGraphIcon className="w-6 h-6 text-primary" />
        </Button>
        <div className="font-bold text-lg mr-auto">ROI</div>
        <div className="text-text-light-secondary mb-auto">More</div>
      </div>
      <div className="flex flex-col mt-auto">
        <div className="text-text-light text-5xl">283%</div>
        <div className="text-text-light-secondary text-sm">
          Return of investment
        </div>
      </div>
      <div className="w-full h-[120px]">
        <Image
          src="/images/roi-graph.svg"
          width="274"
          height="120"
          className="object-cover"
          alt="grpah-image"
        />
      </div>
    </DashboardCardWrapper>
  );
}

export default DashboardCard4;
