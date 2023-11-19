import Image from "next/image";
import React from "react";
import Button from "../ui/button";

function SidebarProfile() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 mb-4 rounded-full overflow-hidden bg-gray-30">
        <Image
          src="/images/profile-image.png"
          alt="profile"
          width="80"
          height="80"
          className="w-full h-full"
        />
      </div>
      <div className="text-lg font-medium">Anandu Cherakkal</div>
      <Button variant="outline-light" size="sm" className="mt-2">
        Edit
      </Button>
    </div>
  );
}

export default SidebarProfile;
