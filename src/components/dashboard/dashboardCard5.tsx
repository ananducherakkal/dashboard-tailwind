import React from "react";
import DashboardCardWrapper from "./dashboardCardWrapper";
import Button from "../ui/button";
import BarGraphIcon from "../icons/barGraph";
import Image from "next/image";
import styles from "@/styles/dashboardCard5.module.css";

function DashboardCard5() {
  return (
    <DashboardCardWrapper className={`${styles.card}`}>
      <div className="flex justify-center items-center h-1/3 min-h-fit mt-auto">
        <Button className="w-fit">Web score with AI</Button>
      </div>
    </DashboardCardWrapper>
  );
}

export default DashboardCard5;
