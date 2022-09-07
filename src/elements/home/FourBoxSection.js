import React from "react";
import { FiMonitor } from "react-icons/fi";
import { SiWebmoney } from "react-icons/si";
import { motion } from "framer-motion";
import { Components } from "../Components";

const FourBoxSection = () => {
  return (
    <div id="fourbox" className="special-container bg-bg-sec bg-no-repeat bg-right mx-6 lg:mx-0 md:mb-20">
      <div className="text-center flex flex-col gap-4 mb-20">
        <div>
          <p className="font-medium">Featured services</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl">Why you will choose </h3>
          <h3 className="text-4xl"> our software?</h3>
        </div>
        <p>
          As a SAAS web crawler expert, I help organizations adjust to the{" "}
          <br /> expanding significance of internet promoting.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:mx-44">
          <Components.Home.FourBoxItem duration={0.25}/>
          <Components.Home.FourBoxItem duration={0.50}/>
          <Components.Home.FourBoxItem duration={0.75}/>
          <Components.Home.FourBoxItem duration={1}/>
      </div>
    </div>
  );
};

export default FourBoxSection;
