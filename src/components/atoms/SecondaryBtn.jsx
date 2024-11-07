import React from "react";

const SecondaryBtn = ({ children, className = "font-bold" }) => {
  return (
    <button
      type="button"
      className={`py-[10px] px-6 uppercase flex gap-2 border border-transparent transition-all duration-400 hover:border-black ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
