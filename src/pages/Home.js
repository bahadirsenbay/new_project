import React from "react";
import { Components } from "../elements/Components";

const Home = () => {
  return (
    <>
      <div className="bg-bg-hero bg-no-repeat bg-bottom bg-red-500 ">
        <Components.Home.HeroSection />
      </div>
      <Components.Home.FourBoxSection />
      <Components.Home.MobileApp />
      <Components.Home.InfoBox />
      <Components.Home.FourBoxSection />

    </>
  );
};

export default Home;
