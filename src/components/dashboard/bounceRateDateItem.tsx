import { cn } from "@/utils/shadcn";
import React from "react";

interface IBounceRateDateItems {
  active?: boolean;
  day: string;
  date: number;
}

function BounceRateDateItems(props: IBounceRateDateItems) {
  const { active, day, date } = props;

  return (
    <div
      className={cn(
        "w-16 h-[72px] border-text-light-secondary rounded-md flex flex-col items-center justify-center",
        active ? "bg-primary" : "border"
      )}
    >
      <div className="text-base text-text-light-secondary font-semibold">
        {day}
      </div>
      <div className="text-text-secondary font-semibold mt-1">{date}</div>
    </div>
  );
}

export default BounceRateDateItems;
