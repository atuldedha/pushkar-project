import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ setShowSidebar }) => {
  return (
    <div className="flex justify-between mt-4 w-full bg-white shadow-md h-max p-4">
      <Bars3Icon
        className="w-6 h-6 text-gray1 ml-5 hover:cursor-pointer hover:text-gray-300"
        onClick={() => setShowSidebar((prev) => !prev)}
      />
      <UserIcon className="w-8 h-8 mr-4 text-gray1 hover:cursor-pointer hover:text-gray-300" />
    </div>
  );
};

export default Header;
