import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../icons/logo";

function SidebarLogo() {
  return (
    <Link href="/">
      <div className="w-full flex items-center justify-center p-7 my-7">
        <Logo className="h-8 w-auto mr-3 text-primary" />
        <div className="text-xl font-medium">Logo</div>
      </div>
    </Link>
  );
}

export default SidebarLogo;
