import React, { Children } from "react";

const Text = ({ children, className = "" }) => {
  return (
    <p className={`${className} text-base text-[#333333] leading-6`}>
      {children}
    </p>
  );
};

export default Text;
