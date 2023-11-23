import React from "react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "./tooltipRoot";
import { cn } from "@/utils/shadcn";

interface ITooltip {
  className?: string;
  tooltipClassName?: string;
  children?: React.ReactNode;
  text: string;
}
function Tooltip(props: ITooltip) {
  const { children, className, tooltipClassName, text } = props;

  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger className={cn("", tooltipClassName)}>
          {children}
        </TooltipTrigger>
        <TooltipContent className={cn("", className)}>
          <p>{text}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export default Tooltip;
