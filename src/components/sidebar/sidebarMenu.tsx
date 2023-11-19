import React from "react";
import SidebarMenuItem from "./sidebarMenuItem";
import AppIcon from "../icons/app";
import DocumentWithGraphIcon from "../icons/documentWithGraph";
import CalenderIcon from "../icons/calender";
import SettingsIcon from "../icons/settings";

function SidebarMenu() {
  return (
    <div className="w-full max-width-[210px] pl-8 pr-5 flex flex-col space-y-1 my-auto">
      <SidebarMenuItem
        icon={<AppIcon className="w-full h-full" />}
        label="Dashboard"
      />
      <SidebarMenuItem
        icon={<DocumentWithGraphIcon className="w-full h-full" />}
        label="Activity"
      />
      <SidebarMenuItem
        icon={<CalenderIcon className="w-full h-full" />}
        label="Schedule"
      />
      <SidebarMenuItem
        icon={<SettingsIcon className="w-full h-full" />}
        label="Settings"
      />
    </div>
  );
}

export default SidebarMenu;
