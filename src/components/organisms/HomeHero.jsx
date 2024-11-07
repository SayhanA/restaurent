import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/HeroImage.png";
import HeroHeading from "../atoms/HeroHeading";
import PrimaryBtn from "../atoms/PrimaryBtn";
import FlowerSvg from "@/assets/svgs/FlowerSvg";
import OfferSticker from "@/assets/svgs/OfferSticker";

const HomeHero = ({ className = "" }) => {
  return (
    <section
      id="Hero-section"
      className={`${className} bg-[#be3d1e] overflow-hidden`}
    >
      <div className="container mx-auto max-w-[1373.5px] md:h-[87.8vh] relative sm:ps-10 sm:pe-14 px-5 md:block flex flex-col-reverse transition-all h-fit">
        <div className="h-full md:float-end flex items-center relative mb-20">
          <FlowerSvg className="absolute end-[-30px] top-[6%]" />
          <OfferSticker className="absolute md:bottom-16 bottom-[1.6%] md:-end-14 end-[2%] transition-all" />
          <Image
            src={HeroImage}
            width="auto"
            height="auto"
            alt="Picture of the author"
            priority={true}
          />
        </div>
        <div className="flex justify-center h-full text-white md:absolute flex-col transition-all my-20">
          <HeroHeading>Taste the authentic Saudi cuisine</HeroHeading>
          <p className="lg:text-2xl text-xl lg:max-w-[600px] md:max-w-[450px] mt-3 mr-5">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>
          <PrimaryBtn className="w-fit text-black font-bold mt-9">
            Explore Menu
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
