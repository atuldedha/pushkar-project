import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import ReactLanguageSelect from "react-languages-select";
import "react-languages-select/css/react-languages-select.css";

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

        <div className="mb-8 mt-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-5">
          <div className="md:basis-1/2">
            <span className="text-black font-medium font-sans text-base">
              Country
            </span>
            <CountryDropdown
              value={country}
              onChange={onChange}
              classes="p-3 outline-none border border-gray-300 w-full rounded-lg"
            />
          </div>

          <div className="md:basis-1/2 flex flex-col w-full">
            <label
              htmlFor="location"
              className="text-black font-medium font-sans text-base"
            >
              Location
            </label>
            <select
              name="location"
              value={language}
              onChange={onDropdownChange}
              id="location"
              className="border border-gray-300 p-3 rounded-lg outline-none w-full"
            >
              <option value="dutch">Dutch</option>
              <option value="danish">Danish</option>
              <option value="en">English</option>
              <option value="gr">German</option>
              <option value="fr">French</option>
              <option value="hn">Hungarian</option>
              <option value="it">Italian</option>
            </select>
          </div>
        </div>

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
