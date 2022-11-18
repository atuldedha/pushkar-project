import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import "react-languages-select/css/react-languages-select.css";
import CountryLanguageSelection from "../components/CountryLanguageSelection/CountryLanguageSelection";

const KeyFinder = () => {
  const [country, setCountry] = useState("United States");
  const [language, setLanguage] = useState("en");

  const onChange = (val) => {
    setCountry(val);
  };
  const onDropdownChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full py-2 px-6">
      <div className="flex flex-col py-4 px-8 bg-white items-start rounded-xl">
        <div className="flex items-center space-x-4">
          <span className="text-black font-bold font-sans text-base tracking-wide">
            Keyword Finder
          </span>
          <ViewfinderCircleIcon className="h-8 w-8" />
        </div>
        <span className="text-gray-500 text-sm font-sans font-normal">
          For long-tail, high-intent keyword
        </span>

        <div className="w-full border-b-[1px] border-gray-400 my-4" />

        <div className="flex flex-col">
          <span className="font-bold text-base font-sans text-gray-600">{`Your Seed Keyword(s)`}</span>
          <input
            type="text"
            placeholder="best bike for"
            className="py-2 px-6 mt-2 border border-gray-500 outline-none text-gray-600 placeholder:text-gray-300 rounded-lg"
          />
          <span className="font-bold text-gray-500 font-sans text-sm mt-2">
            Free Accounts
            <span className="font-medium">
              are limited to 7 searches per 7 days
            </span>
          </span>
        </div>

        <CountryLanguageSelection
          country={country}
          onChange={onChange}
          language={language}
          onDropdownChange={onDropdownChange}
        />

        <div className="w-full flex items-center justify-end">
          <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-lg hover:scale-105">
            Find Keyword
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyFinder;
