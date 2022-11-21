import React from "react";

const SidebarOptions = ({
  Icon,
  text,
  index,
  selected,
  handleClick,
  route,
}) => {
  return (
    <div
      className={`${
        selected ? "bg-gray-200" : ""
      } sticky top-0 left-0 flex items-center space-x-2 hover:cursor-pointer mb-4 hover:bg-gray-200 py-2 px-4 w-full`}
      onClick={() => handleClick(index, route)}
    >
      <Icon className="h-4 w-4 md:h-6 md:w-6 text-gray1" />
      <span className="text-xs md:text-sm text-gray1 font-sans whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export default SidebarOptions;
