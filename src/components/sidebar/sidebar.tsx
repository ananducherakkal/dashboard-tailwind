"use client";
import SidebarLogo from "./sidebarLogo";
import SidebarProfile from "./sidebarProfile";
import SidebarWrapper from "./sidebarWrapper";
import StoreProvider from "@/redux/storeProvider";

function Sidebar() {
  return (
    <StoreProvider>
      <SidebarWrapper>
        <SidebarLogo />
        <SidebarProfile />
      </SidebarWrapper>
    </StoreProvider>
  );
}

export default Sidebar;
