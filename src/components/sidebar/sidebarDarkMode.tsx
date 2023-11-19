import React from "react";
import ToggleButton from "../ui/toggleButton";

function SidebarDarkMode() {
  return (
    <div className="flex justify-center items-center text-xs space-x-2 p-6 mt-auto">
      <div>Light</div>
      <ToggleButton />
      <div>Dark</div>
    </div>
  );
}

export default SidebarDarkMode;
