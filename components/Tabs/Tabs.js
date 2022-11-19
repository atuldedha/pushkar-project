import React, { useState } from "react";
import Credits from "../Credits/Credits";
import Receipts from "../Receipts/Receipts";
import Subscriptions from "../Subscriptions/Subscriptions";

const Tabs = () => {
  const [selected, setSelected] = useState(1);

  const handleSelection = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center space-x-4 md:space-x-6 mt-10">
        <div className="relative flex flex-col">
          <span
            className={`${
              selected === 1
                ? "text-black font-semibold"
                : "font-normal text-gray-400"
            } font-sans text-base hover:cursor-pointer`}
            onClick={() => handleSelection(1)}
          >
            Credits
          </span>
          {selected === 1 && (
            <div className="absolute top-14 border-b-[2px] border-b-blue1 w-full" />
          )}
        </div>

        <div className="relative flex flex-col">
          <span
            className={`${
              selected === 2
                ? "text-black font-semibold"
                : "font-normal text-gray-400"
            } font-sans text-base hover:cursor-pointer`}
            onClick={() => handleSelection(2)}
          >
            Subscriptions
          </span>
          {selected === 2 && (
            <div className="absolute top-14 border-b-[2px] border-b-blue1 w-full" />
          )}
        </div>

        <div className="relative flex flex-col">
          <span
            className={`${
              selected === 3
                ? "text-black font-semibold"
                : "font-normal text-gray-400"
            } font-sans text-base hover:cursor-pointer`}
            onClick={() => handleSelection(3)}
          >
            Receipts
          </span>
          {selected === 3 && (
            <div className="absolute top-14 border-b-[2px] border-b-blue1 w-full" />
          )}
        </div>
      </div>
      <div className="border-b-[1px] w-full border-b-gray-300 mt-8" />

      {selected === 1 && <Credits />}
      {selected === 2 && <Subscriptions />}
      {selected === 3 && <Receipts />}
    </div>
  );
};

export default Tabs;
