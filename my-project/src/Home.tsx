// import React from "react";
import Header from "./Header";
// import Slider2 from "./Slider2";
import MarqueeSlider from "./marqueurslider";
import { gamesData } from "./data";
import Section from "./section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      {/* <Slider2 /> */}
      <MarqueeSlider games={gamesData} />

      <Section />
    </div>
  );
}
