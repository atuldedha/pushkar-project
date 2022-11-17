import React from "react";

const HomeCard = ({
  text,
  buttonText1,
  buttonText2,
  useButton2,
  reportsAvailable,
}) => {
  console.log(reportsAvailable);
  return (
    <div className="w-full flex items-center justify-between bg-white shadow-lg border border-gray-300 p-4 rounded-lg">
      <div className="flex flex-col items-start justify-center">
        <span className="text-base font-normal font-sans text-gray-400">
          {text}
        </span>
        {reportsAvailable ? (
          <span>{reportsAvailable}</span>
        ) : (
          <span>{reportsAvailable}</span>
        )}
      </div>

      {useButton2 ? (
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-[#ccf7e5] text-sm text-[#12da7f] font-sans font-normal rounded-lg px-8">
            {buttonText1}
          </button>
          <button className="p-2 bg-[#d7eff6] text-sm text-[#72c4dd] font-sans font-normal rounded-lg px-8">
            {buttonText2}
          </button>
        </div>
      ) : (
        <button className="bg-[#d5e4fa] p-2 text-sm text-[#337ee6] font-sans font-normal rounded-lg px-8">
          {buttonText1}
        </button>
      )}
    </div>
  );
};

export default HomeCard;
