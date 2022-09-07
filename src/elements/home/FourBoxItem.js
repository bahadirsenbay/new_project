import React from "react";
import { FiMonitor } from "react-icons/fi";
import { SiWebmoney } from "react-icons/si";
import { motion } from "framer-motion";

const FourBoxItem = ({duration}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      animate={{ y: [500, 0, 0] }}
      transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.50 }}
      className="bg-gray-200 hover:bg-white hover:drop-shadow-lg transition-all rounded-3xl flex flex-col items-center justify-center text-center gap-3 py-9 px-6"
    >
      <div className="flex items-center justify-center h-24 w-24 rounded-xl bg-white drop-shadow-lg mb-7">
        <FiMonitor fontSize={40} color={"purple"} />
      </div>
      <h3 className="text-xl font-bold">Branding</h3>
      <p className="text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </motion.div>
  );
};

export default FourBoxItem;
