import React from "react";
import {
  BookmarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const YourWebsites = () => {
  return (
    <div className="flex flex-col items-center mt-4 md:mt-20 h-full ml-4 mr-4 md-mr-0 md:ml-20">
      <div className="w-full md:w-[60%] flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-black text-xl md:text-3xl font-bold font-sans">
            {`0 website(s)`}
          </span>
          <button className="bg-blue1 py-2 md:py-3 px-5 text-white text-base text-center hover:bg-[#3c86ed] transition-all ease-in-out rounded-lg">
            Add a website
          </button>
        </div>
        <span className="text-gray-500 w-[40%] mt-3 md:mt-0 lg:w-[70%] text-sm font-sans font-normal">
          By adding your websites to this list, LowFruits will check if they are
          ranking on keywords you analyze
          <QuestionMarkCircleIcon className="h-4 w-4 inline-block ml-2" />
        </span>

        <div className="border-b-[1px] border-gray-300 w-full my-8" />

        <div className="bg-white px-3 py-4 text-black border border-gray-300 font-sans font-semibold text-base rounded-lg mt-2">
          Domains
        </div>

        <div className="bg-white px-3 py-4 text-black border border-gray-300 font-sans font-semibold text-base rounded-lg">
          Empty
        </div>
      </div>
    </div>
  );
};

export default YourWebsites;
