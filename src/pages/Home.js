import React from "react";
import { Components } from "../elements/Components";

const Home = () => {
  return (
    <>
      <div className=" bg-red-500 after:content:[''] after:bg-bg-hero bg-no-repeat bg-bottom">
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
