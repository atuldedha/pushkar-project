import React from "react";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Subscriptions = () => {
  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex flex-col items-start">
        <span className="text-bold text-xl leading-6 tracking-wide font-sans font-bold">
          Choose a Subscription
        </span>
        <div className="grid grid-cols-2 gap-4 w-full">
          <SubscriptionCard
            title="Standard ($29.9/month)"
            subText="3000 credits/month"
          />
          <SubscriptionCard
            title="Premium ($79.9/month)"
            subText="10000 credits/month"
          />
          <SubscriptionCard
            title="Standard ($249/year)"
            subText="3000 credits/month"
          />
          <SubscriptionCard
            title="Premium ($749/year)"
            subText="10000 credits/month"
          />
        </div>
      </div>

      <div className="flex flex-col mt-8 w-full">
        <div className="bg-white w-full py-5 px-4 rounded-lg border border-gray-200">
          <span className="text-base font-semibold font-sans text-black">
            Your subscription
          </span>
        </div>
        <div className="flex items-center bg-[#f8fbfd] px-4 py-4 border border-gray-200">
          <span className="text-[#9baecb] w-[20%] uppercase font-sans font-normal text-xs">
            Start Date
          </span>

          <span className="text-[#9baecb] w-[15%] uppercase font-sans font-normal text-xs">
            Plan
          </span>

          <span className="text-[#9baecb] w-[15%] uppercase font-sans font-normal text-xs">
            Credits
          </span>

          <span className="text-[#9baecb] w-[20%] uppercase font-sans font-normal text-xs">
            Next Payment
          </span>

          <span className="text-[#9baecb] w-[20%] uppercase font-sans font-normal text-xs">
            Status
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-8 w-full">
        <div className="bg-white w-full py-5 px-4 rounded-lg border border-gray-200">
          <span className="text-base font-semibold font-sans text-black">
            Periods
          </span>
        </div>
        <div className="flex items-center bg-[#f8fbfd] px-20 py-4 border border-gray-200">
          <span className="text-[#9baecb] w-[20%] uppercase font-sans font-normal text-sm">
            Date{" "}
            <QuestionMarkCircleIcon className="h-3 w-3 mr-2 mb-3 inline-block" />
          </span>

          <span className="text-[#9baecb] w-[50%] uppercase font-sans font-normal text-sm">
            Monthly credits
          </span>

          <span className="text-[#9baecb] w-[20%] uppercase font-sans font-normal text-sm">
            order date
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
