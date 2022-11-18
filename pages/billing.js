import React from "react";
import Tabs from "../components/Tabs/Tabs";

const Billing = () => {
  return (
    <div className="flex flex-col h-full py-2 px-4 md:px-6 pb-10">
      <div className="md:mx-[300px] flex flex-col py-4 px-4 md:px-8 items-start rounded-xl mt-4 md:mt-20">
        <span className="font-bold text-2xl leading-8 tracking-wide text-black font-sans">
          Credits
        </span>

        <Tabs />
      </div>
    </div>
  );
};

export default Billing;
