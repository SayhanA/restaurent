import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import Text from "../atoms/Text";
import PrimaryBtn from "../atoms/PrimaryBtn";
import SecondaryBtn from "../atoms/SecondaryBtn";
import CallSvg from "@/assets/svgs/CallSvg";

const ServicesExperinces = () => {
  return (
    <div className="w-full">
      <SectionHeader>
        Our Extensive Experience in the Culinary Industry
      </SectionHeader>
      <Text className="mt-5 ml-2 mb-8">
        With over 20 years in the culinary industry, our chefs and team have
        consistently delivered exceptional dining experiences. From
        Michelin-starred restaurants to private events, we have honed our skills
        in various culinary traditions and modern techniques. We are committed
        to creating memorable moments for every guest.
      </Text>
      <div className="flex gap-5">
        <PrimaryBtn>Learn More</PrimaryBtn>
        <SecondaryBtn>
          <CallSvg />
          <p>+88 3426 739 485</p>
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default ServicesExperinces;
