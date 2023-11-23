import React from "react";

function BounceRateSummary() {
  return (
    <div className="flex h-20">
      <div className="h-full flex-1 flex items-center justify-center text-5xl text-text font-semibold border-r border-text-light-secondary pr-2">
        52%
      </div>
      <div className="h-full flex-1 flex flex-col items-start justify-center font-semibold pl-4">
        <div className="font-md text-text">-20%</div>
        <div className="text-text-secondary">Since last day</div>
      </div>
    </div>
  );
}

export default BounceRateSummary;
