import React from "react";
import { Oswald } from "next/font/google";

const bebas_nesu = Oswald({
  subsets: [],
  weight: "400",
});

const HeroHeading = ({ children }) => {
  return (
    <div
      className={`${bebas_nesu.className} font-serif tracking-[-0.05em] font-bold xl:text-[120px] lg:text-[100px] md:text-[85px] text-[48px] leading-[56px] lg:leading-[130px] md:leading-[90px] uppercase xl:max-w-[930px] lg:max-w-[800px] md:max-w-[650px] transition-all bg-gradient-to-r from-transparent to-[#BD1F17B2]`}
    >
      {children}
    </div>
  );
};

export default HeroHeading;
