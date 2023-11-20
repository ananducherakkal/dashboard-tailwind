"use client";
import { toggleSidebar } from "@/redux/features/sidebarSlice";
import { useDispatch } from "@/redux/hooks";
import React from "react";
import HamburgerIcon from "../icons/hamburger";
import { cn } from "@/utils/shadcn";

type SidebarToggleButtonProps = {
  className?: string;
};

function SidebarToggleButton(props: SidebarToggleButtonProps) {
  const { className } = props;

  const dispatch = useDispatch();

  return (
    <div
      className={cn("w-6 h-6 cursor-pointer md:hidden", className)}
      onClick={() => {
        dispatch(toggleSidebar());
      }}
    >
      <HamburgerIcon className="w-full h-full" />
    </div>
  );
}

export default SidebarToggleButton;