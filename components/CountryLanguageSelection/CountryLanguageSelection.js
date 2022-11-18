import React from "react";
import { CountryDropdown } from "react-country-region-selector";

const CountryLanguageSelection = ({
  country,
  onChange,
  language,
  onDropdownChange,
}) => {
  return (
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
  );
};

export default CountryLanguageSelection;
