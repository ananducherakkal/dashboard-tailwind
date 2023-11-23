import React from "react";
import Select, { SelectOptions } from "../ui/select";
import Input from "../ui/input";
import MagnifingGlassIcon from "../icons/magnifingGlass";
import Button from "../ui/button";
import BellIcon from "../icons/bell";
import SidebarToggleButton from "../sidebar/sidebarToggleButton";
import StoreProvider from "@/redux/storeProvider";

function DashboardHeader() {
  return (
    <div className="w-full flex items-start flex-wrap">
      <div className="flex items-center flex-1 mr-2 mb-4">
        <StoreProvider>
          <SidebarToggleButton className="mr-2" />
        </StoreProvider>
        <h1 className="text-xl">Statistics</h1>
        <Input
          variant="transparent"
          placeholder="Search something..."
          icon={<MagnifingGlassIcon className="h-4 w-4" />}
          iconPosition="left"
          className="mx-auto w-64 hidden lg:block"
        />
      </div>
      <div className="flex space-x-2">
        <Button>Upgrade</Button>
        <Button variant="outline-light">
          <BellIcon />
        </Button>
      </div>
    </div>
  );
}

export default DashboardHeader;
