import React from "react";
import { HiTranslate } from "react-icons/hi";

const InfoBox = () => {
  return (
    <div className="h-96 bg-gradient-to-r from-purple-500 to-pink-500 ">
<div className="grid grid-cols-2 mx-20 h-full">
        <div className="flex flex-col justify-center">
          <h4 className="text-3xl font-bold text-white">
            Our many years of experience in <br /> numbers
          </h4>
          ------
          <p className="text-white">
            We show you our professional achievements in numbers, which show{" "}
            <br /> the acquired skills and trust of many clients.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <HiTranslate fontSize={50} color={"white"} />
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-white">2500+</p>
              <p className="text-base text-white">Satisfied customers</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <HiTranslate fontSize={50} color={"white"} />
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-white">9500+</p>
              <p className="text-base text-white">Satisfied customers</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <HiTranslate fontSize={50} color={"white"} />
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-white">6000+</p>
              <p className="text-base text-white">Satisfied customers</p>
            </div>
          </div>
        </div>
</div>
    </div>
  );
};

export default InfoBox;
