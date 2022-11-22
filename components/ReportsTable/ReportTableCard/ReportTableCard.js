import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const ReportTableCard = ({ data, setSearchData }) => {
  const handleDelete = () => {
    setSearchData((prev) => prev?.filter((item) => item.id !== data.id));
  };
  return (
    <div className="flex items-center border-b border-b-gray-400 py-4 px-4 space-x-4 w-[700px] xl:w-[900px]">
      <div className="flex flex-col w-[200px] xl:w-[250px]">
        <span className="text-base font-normal font-sans text-blue1">
          {data.name}
        </span>
        <span className="text-base font-normal font-sans text-gray-400">
          {data.subName}
        </span>
      </div>

      <span className="text-base text-gray-500 font-normal font-sans w-[200px] xl:w-[250px]">
        {data.source}
      </span>
      <span className="text-base text-gray-500 font-normal font-sans w-[150px]">
        {data.mode}
      </span>
      <span className="text-base text-gray-500 font-normal font-sans w-[150px]">
        {data.totalKws}
      </span>
      <span className="text-base text-gray-500 font-normal font-sans w-[150px]">
        {data.clusters}
      </span>
      <span className="text-base text-gray-500 font-normal font-sans w-[150px]">
        {data.language}
      </span>
      <span className="text-base text-gray-500 font-normal font-sans w-[300px]">
        {data.createdAt}
      </span>

      <TrashIcon
        className="h-10 w-10 text-red-400 hover:cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};

export default ReportTableCard;
