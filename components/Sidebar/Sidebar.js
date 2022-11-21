import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ClipboardIcon,
  CreditCardIcon,
  GlobeAltIcon,
  HomeIcon,
  InboxIcon,
  ViewfinderCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import { useRouter } from "next/router";
import { useWindowSize } from "../../utils/WindowResizeHook";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [selected, setSelected] = useState(1);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width && width < parseFloat(750)) {
      setShowSidebar(false);
    } else if (width && width > parseFloat(750)) {
      setShowSidebar(true);
    }
  }, [width]);
  const router = useRouter();

  const handleClick = (index, route) => {
    setSelected(index);
    if (width < parseFloat(750)) {
      setShowSidebar(false);
    }
    router.push(route);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setSelected(1);
    } else if (router.pathname === "/keyFinder") {
      setSelected(2);
    } else if (router.pathname === "/report") {
      setSelected(3);
    } else if (router.pathname === "/importKeywords") {
      setSelected(4);
    } else if (router.pathname === "/list") {
      setSelected(5);
    } else if (router.pathname === "/billing") {
      setSelected(6);
    } else if (router.pathname === "/yourWebsites") {
      setSelected(7);
    } else if (router.pathname === "/settings") {
      setSelected(8);
    }
  }, [router.pathname]);

  return (
    <div
      className={`${
        !showSidebar
          ? "opacity-0 -translate-x-[500px] w-0 p-0"
          : "opacity-100 translate-x-[1px] w-48 md:w-56 h-screen mt-px md:mt-0 p-5 md:p-6 "
      } z-10 bg-white absolute top-0 left-0 overflow-y-scroll transition-all duration-200 ease-in-out flex flex-col items-start border-l-[1px] border-l-gray-500 shadow-md`}
    >
      <XMarkIcon
        className="h-8 w-8 text-end text-gray-400 mb-8 hover:cursor-pointer hover:scale-105 hover:text-gray-600"
        onClick={() => setShowSidebar(false)}
      />
      {width > parseFloat(750) && (
        <span className="text-base w-full text-center font-sans font-medium text-gray-700 mb-10 mt-10">
          Pushkar <span className="text-green-400">Project</span>
        </span>
      )}
      <SidebarOptions
        Icon={HomeIcon}
        text="Dashboard"
        selected={selected === 1}
        index={1}
        handleClick={handleClick}
        route="/"
      />
      <SidebarOptions
        Icon={ViewfinderCircleIcon}
        text="Keyword Finder"
        selected={selected === 2}
        index={2}
        handleClick={handleClick}
        route="/keyFinder"
      />
      <SidebarOptions
        Icon={ClipboardIcon}
        text="Keyword Report"
        selected={selected === 3}
        index={3}
        handleClick={handleClick}
        route="/report"
      />
      <SidebarOptions
        Icon={InboxIcon}
        text="Keyword Import"
        selected={selected === 4}
        index={4}
        handleClick={handleClick}
        route="/importKeywords"
      />
      <SidebarOptions
        Icon={BookmarkIcon}
        text="List"
        selected={selected === 5}
        index={5}
        handleClick={handleClick}
        route="/list"
      />
      <div className="border-b-[1px] border-b-gray-400 w-full mb-2" />
      <SidebarOptions
        Icon={CreditCardIcon}
        text="Billings"
        selected={selected === 6}
        index={6}
        handleClick={handleClick}
        route="/billing"
      />
      <SidebarOptions
        Icon={GlobeAltIcon}
        text="Your website"
        selected={selected === 7}
        index={7}
        handleClick={handleClick}
        route="/yourWebsite"
      />
      <SidebarOptions
        Icon={CreditCardIcon}
        text="Settings"
        selected={selected === 8}
        index={8}
        handleClick={handleClick}
        route="/settings"
      />
    </div>
  );
};

export default Sidebar;
