import React from "react";

const Receipts = () => {
  return (
    <div className="flex flex-col mt-8 w-full">
      <div className="bg-white flex items-center justify-between w-full py-5 px-4 rounded-lg border border-gray-200">
        <span className="text-base font-semibold font-sans text-black">
          Receipts
        </span>
        <span className="text-[#9baecb] font-sans font-normal text-sm">
          To add company details to your invoice, click on download and add the
          information.
        </span>
      </div>
      <div className="flex items-center bg-[#f8fbfd] px-4 py-4">
        <span className="text-[#9baecb] w-[20%] font-sans font-normal text-sm">
          Date
        </span>
      </div>
      <div className="bg-white w-full py-5 px-4 rounded-lg border border-gray-200">
        <span className="text-sm font-normal font-sans text-black">
          No Receipts yet (receipts are not available for purchases before 10th
          May 2022)
        </span>
      </div>
    </div>
  );
};

export default Receipts;
