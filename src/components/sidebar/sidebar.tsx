"use client";
import SidebarLogo from "./sidebarLogo";
import SidebarWrapper from "./sidebarWrapper";
import StoreProvider from "@/redux/storeProvider";

function Sidebar() {
  return (
    <StoreProvider>
      <SidebarWrapper>
        <SidebarLogo />
      </SidebarWrapper>
    </StoreProvider>
  );
}

export default Sidebar;
