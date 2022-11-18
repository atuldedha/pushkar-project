import { InboxIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import CountryLanguageSelection from "../components/CountryLanguageSelection/CountryLanguageSelection";

const ImportKeywords = () => {
  const [country, setCountry] = useState("United States");
  const [language, setLanguage] = useState("en");

  const [formData, setFormData] = useState({
    reportName: "",
    keywords: "",
    website: "",
    da: 20,
    domainToHighlight: "",
  });

  const [countrySearchChecked, setCountrySearchChecked] = useState(true);
  const [analyzeChecked, setAnalyzeChecked] = useState(true);

  const onChange = (val) => {
    setCountry(val);
  };
  const onDropdownChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center h-full py-2 px-4 md:px-6 pb-10">
      <div className="flex flex-col py-4 px-4 md:px-8 bg-white items-start rounded-xl mt-4 md:mt-20">
        <div className="flex items-center space-x-2">
          <span className="text-black font-bold font-sans text-xl tracking-wide">
            Import
          </span>
          <InboxIcon className="h-8 w-8" />
        </div>

        <span className="text-gray-500 font-normal font-sans text-sm mt-2">{`Import (and analyze) keywords in bulk.`}</span>

        <span className="text-gray-400 font-normal text-xs md:text-sm mt-2 font-sans">
          <QuestionMarkCircleIcon className="md:h-4 h-3 md:w-4 w-3 inline-block mr-[3px] md:mr-2" />
          Duplicate keywords will be deleted before analysis.
        </span>

        <div className="border-b-[1px] border-b-gray-200 w-full mt-6 mb-16 md:mb-20" />

        <div className="flex flex-col space-y-2 w-full mb-6">
          <span className="relative font-snas tracking-wide font-medium text-normal">
            Name your report <span className="absolute top-0">*</span>
          </span>

          <input
            type="text"
            onChange={handleChange}
            value={formData.reportName}
            name="reportName"
            placeholder="Name"
            className="bg-white border border-gray-300 outline-blue1 text-base px-4 py-2 w-full rounded-md flex-grow font-sans font-normal"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <span className="relative font-snas tracking-wide font-medium text-normal">
            {`Keywords (1 keyword = 1 credit used) `}{" "}
            <QuestionMarkCircleIcon className="h-5 w-5 inline-block" />
          </span>

          <textarea
            type="text"
            placeholder={`One keyword per line
No commas / No UTF-16 encoding
Max 3000 keywords per import`}
            rows={5}
            value={formData.keywords}
            name="keywords"
            onChange={handleChange}
            className="bg-white border border-gray-300 outline-blue1 text-base px-4 py-2 w-full rounded-md flex-grow font-sans font-normal"
          />
        </div>

        <CountryLanguageSelection
          country={country}
          onChange={onChange}
          language={language}
          onDropdownChange={onDropdownChange}
        />

        <div className="flex items-center space-x-4 mb-6">
          <input
            type="checkbox"
            checked={countrySearchChecked}
            onChange={(e) => setCountrySearchChecked(e.target.checked)}
          />
          <span className="text-black font-sans font-normal text-base">
            Country search volumes{" "}
            <QuestionMarkCircleIcon className="h-3 w-3 inline-block" />
          </span>
        </div>

        <div className="flex flex-col space-y-2 w-full mb-6">
          <span className="relative font-snas tracking-wide font-medium text-normal">
            {`Website or Max DA (Optional)`}
          </span>
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="domain.com"
              value={formData.website}
              name="website"
              onChange={handleChange}
              className="bg-white border border-gray-300 outline-blue1 text-base px-4 py-2 w-full rounded-md flex-grow font-sans font-normal"
            />
            <span className="mx-4 text-base text-black font-sans font-normal">
              or
            </span>
            <input
              type="number"
              value={formData.da}
              name="da"
              className="bg-white border border-gray-300 outline-none text-base px-2 py-2 rounded-md font-sans font-normal"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <span className="relative font-snas tracking-wide font-medium text-normal">
            {`Domains to highlight (custom weak spots) `}{" "}
            <QuestionMarkCircleIcon className="h-5 w-5 inline-block" />
          </span>

          <textarea
            type="text"
            placeholder="One domain per line (max 10)"
            rows={5}
            value={formData.domainToHighlight}
            name="domainToHighlight"
            onChange={handleChange}
            className="bg-white border border-gray-300 outline-blue1 text-base px-4 py-2 w-full rounded-md flex-grow font-sans font-normal"
          />
        </div>

        <div className="flex items-center justify-end w-full space-x-4 mt-8 mb-10">
          <input
            type="checkbox"
            checked={analyzeChecked}
            onChange={(e) => setAnalyzeChecked(e.target.checked)}
          />
          <span className="text-base tracking-wide text-black font-sans font-normal">
            Analyze <QuestionMarkCircleIcon className="h-3 w-3 inline-block" />
          </span>
        </div>

        <div className="w-full text-end mb-4">
          <button className="bg-blue1 text-white text-base text-center font-sans font-medium py-2 px-6 rounded-lg hover:bg-blue-600">
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportKeywords;
