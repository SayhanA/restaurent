import React from "react";

const MDText = ({ children, className = "" }) => {
  return (
    <p className={`${className} lg:text-xl text-md text-[#333333]`}>
      {children}
    </p>
  );
};

export default MDText;
