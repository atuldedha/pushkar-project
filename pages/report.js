import React from "react";

const Report = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-20 h-full ml-4 mr-4 md-mr-0 md:ml-20">
      <div className="w-full md:ml-[250px] lg:ml-[300px] xl:mx-[300px] md:w-[60%] flex flex-col items-center border border-gray-300 py-20">
        <span className="font-bold w-full text-center font-sans text-2xl text-black mb-10">
          {"Lets's get started"}
        </span>
        <span className="text-gray-400 font-normal font-sans text-base mb-10">
          Choose an option
        </span>

        <div className="flex flex-col md:items-center md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-6 px-4">
          <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-md hover:bg-blue-600">
            Get keyword ideas
          </button>
          <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-md hover:bg-blue-600">
            Import your own keywords
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
