import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Tooltip from "../ui/tooltip";

function SidebarProfile() {
  return (
    <div className="flex flex-col items-center my-5">
      <div
        className="w-20 h-20 mb-4 rounded-full overflow-hidden bg-gray-30"
        aria-label="user image"
      >
        <Image
          src="/images/profile-image.png"
          alt="profile"
          width="80"
          height="80"
          className="w-full h-full"
        />
      </div>
      <Tooltip text="Anandu Cherakkal">
        <div
          className="text-lg font-medium line-clamp-1 px-2 text-center"
          aria-label="user name"
        >
          Anandu Cherakkal
        </div>
      </Tooltip>
      <Button variant="outline" size="sm" className="mt-2">
        Edit
      </Button>
    </div>
  );
}

export default SidebarProfile;
