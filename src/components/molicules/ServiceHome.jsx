import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import Text from "../atoms/Text";
import PrimaryBtn from "../atoms/PrimaryBtn";
import SecondaryBtn from "../atoms/SecondaryBtn";
import CallSvg from "@/assets/svgs/CallSvg";

const ServiceHome = () => {
  return (
    <div className="w-full h-fit">
      <SectionHeader>
        Exceptional culinary experience and delicious food
      </SectionHeader>
      <Text className="lg:mt-5 mt-3 ml-2 lg:mb-8 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed
        est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum
        viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit
        do eiusmod tempor incididunt ut labore et dolore magna minim veniam
        nostrud exercitation.
      </Text>
      <div className="flex sm:gap-5">
        <PrimaryBtn>About More</PrimaryBtn>
        <SecondaryBtn>
          <CallSvg />
          <Text>+88 3426 739 485</Text>
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default ServiceHome;
