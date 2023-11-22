import getDayAndDate from "@/utils/getDayAndDate";
import React from "react";
import BounceRateDateItems from "./bounceRateDateItem";

const dates = getDayAndDate();

function BounceRateDate() {
  return (
    <div className="flex space-x-2 justify-center px-4 m-auto">
      <BounceRateDateItems
        day={dates.yesterday.day}
        date={dates.yesterday.date}
      />
      <BounceRateDateItems
        day={dates.today.day}
        date={dates.today.date}
        active
      />
      <BounceRateDateItems
        day={dates.tomorrow.day}
        date={dates.tomorrow.date}
      />
    </div>
  );
}

export default BounceRateDate;
