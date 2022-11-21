import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useWindowSize } from "../../utils/WindowResizeHook";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ setShowSidebar }) => {
  const [width, height] = useWindowSize();
  return (
    <div className="flex justify-between mt-4 w-full bg-white border-b border-b-gray-300 h-max p-4">
      <Bars3Icon
        className="w-6 h-6 text-gray1 ml-5 hover:cursor-pointer hover:text-gray-300"
        onClick={() => setShowSidebar((prev) => !prev)}
      />
      {width < parseFloat(750) && (
        <span className="text-base font-sans font-medium text-gray-700">
          Pushkar <span className="text-green-400">Project</span>
        </span>
      )}
      <UserIcon className="w-8 h-8 mr-4 text-gray1 hover:cursor-pointer hover:text-gray-300" />
    </div>
  );
};

export default Header;
