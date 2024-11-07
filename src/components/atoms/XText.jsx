import React from "react";

const XText = ({ children, className = "" }) => {
  return (
    <p className={`${className} md:text-2xl text-xl  text-[#333333]`}>
      {children}
    </p>
  );
};

export default XText;
