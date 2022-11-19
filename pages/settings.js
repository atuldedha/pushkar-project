import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import CountryLanguageSelection from "../components/CountryLanguageSelection/CountryLanguageSelection";

const Settings = () => {
  const [emailNotificationCheck, setEmailNotificationCheck] = useState(true);
  const [earlyAccessChecked, setEarlyAccessChecked] = useState(false);

  const [country, setCountry] = useState("United States");
  const [language, setLanguage] = useState("en");

  const [countryVolumeChecked, setCountryVolumeChecked] = useState(true);

  const onChange = (val) => {
    setCountry(val);
  };
  const onDropdownChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col h-full py-2 px-4 md:px-6 pb-10">
      <div className="md:ml-[250px] lg:ml-[300px] xl:mx-[300px] flex flex-col py-4 px-4 md:px-8 items-start rounded-xl mt-4 md:mt-20">
        <span className="font-sans font-bold text-2xl text-black leading-5 tracking-wide">
          Settings
        </span>

        <div className="w-full border-b border-b-gray-300 my-8" />

        <div className="flex flex-col bg-white p-6 w-full">
          <div className="flex flex-col items-start">
            <span className="text-lg text-black leading-6 tracking-wider font-sans font-semibold">
              Email Notifications
            </span>
            <div className="flex items-center space-x-4 my-4">
              <input
                type="checkbox"
                checked={emailNotificationCheck}
                onChange={(e) => setEmailNotificationCheck(e.target.checked)}
              />
              <span className="text-black text-base font-sans font-normal">
                Notify me when a report is ready
              </span>
            </div>
          </div>

          <div className="w-full border-b border-b-gray-300 my-8" />

          <div className="flex flex-col mt-6">
            <span className="text-lg font-bold text-black font-sans">
              Early Access
            </span>

            <div className="flex items-center space-x-4 my-4">
              <input
                type="checkbox"
                checked={earlyAccessChecked}
                onChange={(e) => setEarlyAccessChecked(e.target.checked)}
              />
              <span className="text-black text-base font-sans font-normal">
                {`Access to features in beta `}
                <QuestionMarkCircleIcon className="h-4 w-4 mr-2 inline-block" />
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-x-0 md:space-y-0 w-full md:space-x-4">
            <div className="md:basis-2/3">
              <CountryLanguageSelection
                country={country}
                onChange={onChange}
                language={language}
                onDropdownChange={onDropdownChange}
              />
            </div>

            <div className="flex flex-col md:basis-1/3">
              <span className="text-black font-medium font-sans text-base md:mt-4">
                DA
              </span>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 outline-none rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <input
              type="checkbox"
              checked={countryVolumeChecked}
              onChange={(e) => setCountryVolumeChecked(e.target.checked)}
            />
            <span className="text-black text-base font-sans font-normal">
              {`Country search volumes `}
              <QuestionMarkCircleIcon className="h-4 w-4 mr-2 inline-block" />
            </span>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <span className="text-xs sm:text-sm md:text-base font-normal font-sans text-black">
              Negative keywords
            </span>
            <input
              type="text"
              className="w-full p-3 border border-gary-400 outline-none rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-2 mt-5">
            <span className="text-xs sm:text-sm md:text-base font-normal font-sans text-black">
              {`Domains to highlight (custom weak spots) `}
              <QuestionMarkCircleIcon className="h-4 w-4 mr-2 inline-block" />
            </span>
            <textarea
              type="text"
              rows={4}
              placeholder="One domain per line"
              className="w-full p-3 border border-gary-400 outline-none rounded-lg"
            />
          </div>

          <div className="w-full flex items-center justify-end mt-6">
            <button className="py-2 px-6 bg-blue1 text-white text-base font-sans font-medium rounded-lg hover:scale-105">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
