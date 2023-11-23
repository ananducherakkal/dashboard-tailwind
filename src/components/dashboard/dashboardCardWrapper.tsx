import { cn } from "@/utils/shadcn";
import React from "react";

interface IDashboardCardWrapper {
  children?: React.ReactNode;
  className?: string;
}
function DashboardCardWrapper(props: IDashboardCardWrapper) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "w-full h-[340px] bg-primary rounded-lg py-8 px-8 md:px-[10%] flex flex-col overflow-visible",
        className
      )}
    >
      {children}
    </div>
  );
}

export default DashboardCardWrapper;
