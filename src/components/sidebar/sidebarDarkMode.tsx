import React from "react";
import ToggleButton from "../ui/toggleButton";

function SidebarDarkMode() {
  return (
    <div className="flex justify-center items-center text-xs space-x-2 p-6">
      <div className="select-none">Light</div>
      <ToggleButton />
      <div className="select-none">Dark</div>
    </div>
  );
}

export default SidebarDarkMode;
