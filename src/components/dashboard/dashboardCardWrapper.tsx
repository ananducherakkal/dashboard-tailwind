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
        "w-full h-[340px] bg-primary rounded-lg p-8 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

export default DashboardCardWrapper;
