import React from "react";

const PrimaryBtn = ({ children, className = "font-bold", type = "button" }) => {
  return (
    <button
      type={type}
      className={`py-[10px] px-6 bg-[#FEBF00] hover:text-white transition-all uppercase ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
