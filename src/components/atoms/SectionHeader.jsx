import React from "react";
import { Oswald } from "next/font/google";

const bebas_nesu = Oswald({
  subsets: [],
  weight: "400",
});

const SectionHeader = ({ children, className = "tracking-[-0.06em]" }) => {
  return (
    <div
      className={`${bebas_nesu.className} ${className} font-serif font-extrabold xl:text-[50px] lg:text-[40px] md:text-[38px] text-[35px] xl:leading-[62px] leading-[40px] md:leading-[45px] w-full uppercase`}
    >
      {children}
    </div>
  );
};

export default SectionHeader;
