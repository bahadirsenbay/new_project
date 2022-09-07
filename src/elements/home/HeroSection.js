import React from "react";
import PhoneBg from "../../assets/image/phonebg.png";
import { FiPower } from "react-icons/fi";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div id="home">
      <div className="flex flex-col lg:grid grid-cols-3 lg:pt-20 mx-3 md:mx-10 xl:mx-44 mb-12">
        <motion.div
          animate={{ y:[500, 0, 0] }}
          transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 2 }}
          className="flex flex-col col-span-2 gap-8 mt-20"
        >
          <h3 className=" text-3xl md:text-7xl font-bold text-white text-center md:text-left">
            The new website <br /> for showcase
          </h3>
          <p className="text-white mb-5">
            SaaSio is the best software platform for running an internet
            business.
          </p>
          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-7">
              <button className="flex items-center gap-3 bg-blue-500 py-4 px-6 rounded-b-full rounded-tl-full font-semibold">
                <FiPower fontSize={25} />
                Start Now
              </button>
              <p className="font-bold">or try it for free</p>
            </div>
            <div className="flex items-center gap-5">
              <div>* * * * *</div>
              <p>(based on 1,256 task reviews)</p>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ x: [500, 0, 0] }}
            transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 2 }}
            className="mt-20"
          >
            {" "}
            <img src={PhoneBg} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
