import React, { useState } from "react";
import ReportTableCard from "./ReportTableCard/ReportTableCard";
import data from "./staticData";

const ReportsTable = () => {
  const [searchData, setSearchData] = useState(data);
  return (
    <div className="flex flex-col overflow-x-auto mb-4 w-[900px] xl:w-[1200px]">
      <div className="flex items-center xl:justify-between py-4 bg-gray-100 border-b-gray-500 border-b mt-10 px-4 space-x-4 min-w-[900px] xl:w-[1200px]">
        <span className="text-black font-semibold font-sans text-base w-[250px] xl:w-[300px]">
          Name
        </span>
        <span className="text-black font-semibold font-sans text-base w-[200px] xl:w-[250px]">
          Source
        </span>
        <span className="text-black font-semibold font-sans text-base w-[150px]">
          Mode
        </span>
        <span className="text-black font-semibold font-sans text-base w-[150px]">
          Analyzed Total Kws
        </span>
        <span className="text-black font-semibold font-sans text-base w-[150px]">
          Cluster
        </span>
        <span className="text-black font-semibold font-sans text-base w-[150px]">
          Language
        </span>
        <span className="text-black font-semibold font-sans text-base w-[300px]">
          Created At
        </span>
        <span className="w-[50px]" />
      </div>

      {searchData?.map((data) => (
        <ReportTableCard
          key={data.id}
          data={data}
          setSearchData={setSearchData}
        />
      ))}
    </div>
  );
};

export default ReportsTable;
