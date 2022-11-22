import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ReportsTable from "../components/ReportsTable/ReportsTable";

const Report = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-20 h-full ml-4 mr-4 md-mr-0 md:ml-20">
      <div className="w-full md:ml-[250px] lg:ml-[200px] xl:mr-[100px] md:w-[80%] flex flex-col">
        <span className="font-bold font-sans text-2xl text-black mb-10">
          Keyword Reports
        </span>

        <div className="flex flex-col w-full lg:flex-row lg:items-center lg:justify-between space-y-3 space-x-0 lg:space-y-0 lg:space-x-2">
          <div className="flex items-center space-x-2 bg-white p-2 border border-gray-500 rounded-md w-[50%] lg:w-[35%]">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search Keyword"
              className="text-sm w-full outline-none bg-inherit border-none placeholder:text-gray-400 text-black font-sans font-normal"
            />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="py-2 px-2 md:px-6 bg-blue1 whitespace-nowrap text-white text-xs md:text-base font-sans font-medium rounded-lg hover:scale-105">
              Keyword Finder
            </button>
            <button className="py-2 px-2 md:px-6 bg-white whitespace-nowrap text-black text-xs md:text-base font-sans font-medium rounded-lg hover:scale-105 border border-gray-400">
              Import Keywords
            </button>
          </div>
        </div>

        <div className="w-full overflow-scroll scrollbar-hide">
          <ReportsTable />
        </div>
      </div>
    </div>
  );
};

export default Report;

//code for empty
// <div className="flex flex-col mt-4 md:mt-20 h-full ml-4 mr-4 md-mr-0 md:ml-20">
//   <div className="w-full md:ml-[250px] lg:ml-[300px] xl:mx-[300px] md:w-[60%] flex flex-col items-center border border-gray-300 py-20">
//     <span className="font-bold w-full text-center font-sans text-2xl text-black mb-10">
//       {"Lets's get started"}
//     </span>
//     <span className="text-gray-400 font-normal font-sans text-base mb-10">
//       Choose an option
//     </span>

//     <div className="flex flex-col md:items-center md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-6 px-4">
//       <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-md hover:bg-blue-600">
//         Get keyword ideas
//       </button>
//       <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-md hover:bg-blue-600">
//         Import your own keywords
//       </button>
//     </div>
//   </div>
// </div>
