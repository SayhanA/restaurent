import React from "react";
import MDText from "../atoms/MDText";
import SectionHeader from "../atoms/SectionHeader";

const SectionTitle = ({ className = "", titleHeadint = "", title = "" }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="w-[10px] h-[10px] bg-red" />
        <MDText className="text-red font-bold">{titleHeadint}</MDText>
      </div>
      <SectionHeader className="tracking-[-0.02em]">{title}</SectionHeader>
    </div>
  );
};

export default SectionTitle;
