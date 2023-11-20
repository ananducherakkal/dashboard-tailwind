import React from "react";
import Select, { SelectOptions } from "../ui/select";
import Input from "../ui/input";
import MagnifingGlassIcon from "../icons/magnifingGlass";

function DashboardHeader() {
  return (
    <div className="flex">
      <h1 className="text-xl">Statistics</h1>
      <Input
        variant="transparent"
        placeholder="Search something..."
        icon={<MagnifingGlassIcon className="h-4 w-4" />}
        iconPosition="left"
      />
    </div>
  );
}

export default DashboardHeader;
