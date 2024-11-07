import React, { Children } from "react";

const XLText = ({ children, className = "" }) => {
  return (
    <p
      className={`${className} xl:text-3xl lg:text-2xl md:text-xl text-lg text-[#333333] font-bold`}
    >
      {children}
    </p>
  );
};

export default XLText;
