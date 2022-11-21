import React from "react";
import CreditsCard from "./CreditsCard/CreditsCard";

const Credits = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full xl:flex-row scrollbar-hide xl:items-center xl:justify-between space-y-3 space-x-0 xl:space-y-0 xl:space-x-2 mt-10">
        <CreditsCard amount="$25" numberOfCredits="2000" value="$0.0125" />
        <CreditsCard amount="$25" numberOfCredits="2000" value="$0.0125" />
        <CreditsCard amount="$25" numberOfCredits="2000" value="$0.0125" />
        <CreditsCard amount="$25" numberOfCredits="2000" value="$0.0125" />
      </div>

      <div className="flex flex-col mt-8">
        <div className="bg-white w-full py-5 px-4 rounded-lg border border-gray-200">
          <span className="text-base font-semibold font-sans text-black">
            Payments
          </span>
        </div>
        <div className="flex items-center bg-[#f8fbfd] px-4 py-4">
          <span className="text-[#9baecb] w-[25%] md:w-[20%] font-sans font-normal text-sm">
            Date
          </span>
          <span className="text-[#9baecb] w-[28%] md:w-[20%] font-sans font-normal text-sm">
            Credits
          </span>
          <span className="text-[#9baecb] w-[25%] md:w-[20%] font-sans font-normal text-sm">
            Amount
          </span>
        </div>
        <div className="bg-white w-full py-5 px-4 rounded-lg border border-gray-200">
          <span className="text-sm font-normal font-sans text-black">
            No payments yet
          </span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
