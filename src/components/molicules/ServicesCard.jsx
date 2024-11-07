import React from "react";
import XLText from "../atoms/XLText";
import LGText from "../atoms/LGText";

const ServicesCard = ({ id, icon, title, description }) => {
  return (
    <div key={id} className="flex items-center gap-4">
      <div className="h-[90px] w-[90px] rounded-full shadow-xl flex justify-center items-center">
        {icon}
      </div>
      <div>
        <XLText className="uppercase text font-bold text-black">{title}</XLText>
        <LGText className="text-[#0A1425]">{description}</LGText>
      </div>
    </div>
  );
};

export default ServicesCard;
