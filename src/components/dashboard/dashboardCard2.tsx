import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import styles from "@/styles/dashboardCard2.module.css";
import Button from "../ui/button";
import DocumentDownloadIcon from "../icons/documentDownload";

function DashboardCard2() {
  return (
    <DashboardCardWrapper className={`bg-gray-70 ${styles.card}`}>
      <h2 className="font-bold text-lg mr-auto">Full report</h2>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-gray-70 rounded-lg w-full mt-6">
          <Button
            variant="outline-light"
            className="p-0 flex items-center w-full border-text-light-secondary h-20"
          >
            <div className="h-full flex items-center justify-center flex-1 border-r border-text-light-secondary px-2">
              Download Report
            </div>
            <div className="p-6">
              <DocumentDownloadIcon className="w-8 h-8" />
            </div>
          </Button>
        </div>
      </div>
    </DashboardCardWrapper>
  );
}

export default DashboardCard2;
