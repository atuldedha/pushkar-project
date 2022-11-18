import React from "react";

const SubscriptionCard = ({ title, subText }) => {
  return (
    <div className="flex w-full flex-col items-start py-8 px-4 bg-white rounded-lg shadow-sm">
      <span className="text-base text-blue1 font-sans font-medium">
        {title}
      </span>
      <span className="text-sm italic text-blue1 font-sans font-medium mt-2">
        {subText}
      </span>
    </div>
  );
};

export default SubscriptionCard;
