import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import Text from "../atoms/Text";
import PrimaryBtn from "../atoms/PrimaryBtn";
import SecondaryBtn from "../atoms/SecondaryBtn";
import CallSvg from "@/assets/svgs/CallSvg";

const ServiceContent = () => {
  return (
    <div className="w-full">
      <SectionHeader>Discover Our Culinary Creations</SectionHeader>
      <Text className="mt-5 ml-2 mb-8">
        Our content section features a diverse range of our finest dishes,
        showcasing the creativity and expertise of our chefs. From
        mouth-watering appetizers to exquisite desserts, we offer a full
        spectrum of flavors to delight your senses. Browse our menu and explore
        the art of fine dining.
      </Text>
      <div className="flex gap-5">
        <PrimaryBtn>Explore Menu</PrimaryBtn>
        <SecondaryBtn>
          <CallSvg />
          <p>+88 3426 739 485</p>
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default ServiceContent;
