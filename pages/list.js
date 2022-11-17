import {
  BookmarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const list = () => {
  return (
    <div className="flex flex-col items-center mt-4 md:mt-20 h-full ml-4 mr-4 md-mr-0 md:ml-20">
      <div className="w-full md:w-[60%] flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookmarkIcon className="w-6 md:w-10 h-6 md:h-10" />
            <span className="text-black text-xl md:text-3xl font-bold font-sans">
              {`0 List(s)`}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="py-2 md:py-3 px-5 bg-inherit border border-[#72c4dd] text-center hover:bg-[#72c4dd] text-base text-[#72c4dd] hover:text-white transition-all ease-in-out rounded-lg">
              Import
            </button>
            <button className="bg-blue1 py-2 md:py-3 px-5 text-white text-base text-center hover:bg-[#3c86ed] transition-all ease-in-out rounded-lg">
              Create
            </button>
          </div>
        </div>
        <span className="text-gray-500 w-[40%] mt-3 md:mt-0 lg:w-full text-sm font-sans font-normal">
          Keywords from your reports can be saved in lists
          <QuestionMarkCircleIcon className="h-4 w-4 inline-block ml-2" />
        </span>

        <div className="border-b-[1px] border-gray-300 w-full my-8" />

        <span className="text-base text-black font-sans font-medium">
          No lists yet
        </span>
      </div>
    </div>
  );
};

export default list;
