import React, { Children } from "react";

const LGText = ({ children, className = "" }) => {
  return (
    <p
      className={`${className} md:text-xl text-lg  text-[#333333] font-normal`}
    >
      {children}
    </p>
  );
};

export default LGText;
