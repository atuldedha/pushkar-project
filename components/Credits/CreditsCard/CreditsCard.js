import React from "react";

const CreditsCard = ({ amount, value, numberOfCredits }) => {
  return (
    <div className="flex flex-col bg-white border-gray-100 shadow-sm border items-center px-10 py-4 space-y-6 rounded-lg">
      <span className="font-sans text-base text-blue1 font-normal text-center whitespace-nowrap">{`Add ${numberOfCredits} credits`}</span>
      <span className="font-sans text-base text-blue1 font-normal text-center whitespace-nowrap">
        {amount}
      </span>
      <span className="font-sans text-base text-blue1 font-normal text-center whitespace-nowrap">{`(${value}/credits)`}</span>
    </div>
  );
};

export default CreditsCard;
