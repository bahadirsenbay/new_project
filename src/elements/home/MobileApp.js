import React from "react";
import PhoneMoc from "../../assets/image/responsive.png";
import { BsPhone } from "react-icons/bs";

const MobileApp = () => {
  return (
    <div id="mobileApp" className="special-container mx-3 lg:mx-20 mb-36">
      <div className="flex flex-col items-center justify-center gap-4 mb-20">
        <p className="text-xl text-blue-400">Yes We Provide Mobile Apps</p>
        <h3 className="text-5xl font-extralight">Mobile Applications</h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex items-center gap-5">
            <div className="text-end w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-end w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-end w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={PhoneMoc} width={"60%"} />
        </div>
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-row-reverse items-center gap-5">
            <div className="text-start w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-5">
            <div className="text-start w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>{" "}
          <div className="flex flex-row-reverse items-center gap-5">
            <div className="text-start w-full lg:w-[75%]">
              <h4 className="font-bold">Responsive Design</h4>
              <p className="text-sm">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-300">
              <BsPhone size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
