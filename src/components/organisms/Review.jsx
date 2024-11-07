"use client";

import React, { useRef } from "react";
import SectionTitle from "../molicules/SectionTitle";
import ReviewCard from "../molicules/ReviewCard";
import Carousel from "react-multi-carousel";
import { CustomLeftArrow } from "../atoms/CustomLeftArrow";
import { CustomRightArrow } from "../atoms/CustomRightArrow";
import { videoData } from "@/data/review";
import Image from "next/image";
import Tomato from "@/assets/images/Tomato.png";
import Grass from "@/assets/images/grass.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = () => {
  const reviewRef = useRef(null);

  const goToPrevious = () => {
    if (reviewRef.current) {
      reviewRef.current.previous();
    }
  };

  // Function to go to the next slide
  const goToNext = () => {
    if (reviewRef.current) {
      reviewRef.current.next();
    }
  };

  return (
    <section className="relative md:pb-20 overflow-hidden">
      <Image
        src={Tomato}
        width="307"
        height="306"
        className="absolute -start-[200px] -rotate-[80deg] xl:block hidden"
        alt="Picture of the author"
      />
      <Image
        src={Grass}
        width="566"
        height="303"
        className="absolute -end-60 bottom-40 rotate-45 xl:block hidden"
        alt="Picture of the author"
      />
      <div className="container mx-auto pb-10 sm:px-10 px-5 md:my-[120px] md:h-full h-fit relative md:mb-0 lg:h-[82vh]">
        <div className="flex md:relative items-center justify-between mb-7 md:mt-0 mt-7">
          <SectionTitle
            titleHeadint="Crispy, Every Bite Taste"
            title="What Some of my Customers Say"
          />
          <div className="reviewCarousalbuttons md:flex items-center gap-4 md:relative hidden">
            <CustomLeftArrow className="" onClick={goToPrevious} />
            <CustomRightArrow onClick={goToNext} />
          </div>
        </div>
        <Carousel
          ref={reviewRef}
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          className="overflow-hidden h-full"
        >
          {videoData?.map(
            ({ id, name, video, vdoImg, location, comment, img }) => (
              <ReviewCard
                key={id}
                name={name}
                location={location}
                img={img}
                comment={comment}
                video={video}
                vdoImg={vdoImg}
              />
            )
          )}
        </Carousel>
        <div className=" flex items-center gap-4 relative h-28 md:hidden">
          <CustomLeftArrow onClick={goToPrevious} />
          <CustomRightArrow onClick={goToNext} />
        </div>
      </div>
    </section>
  );
};

export default Review;
