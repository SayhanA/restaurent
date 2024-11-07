import DubbleCoute from "@/assets/svgs/DubbleCoute";
import React from "react";
import LGText from "../atoms/LGText";
import Text from "../atoms/Text";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import VideoImage from "@/assets/images/video-img.png";
import User from "@/assets/images/user-1.png";

const ReviewCard = ({
  className = "",
  video = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  vdoImg = VideoImage,
  name = "Khalid Al Dawsry",
  location = "Jeddah, Saudi",
  comment = "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  img = User,
}) => {
  return (
    <div
      className={`${className} flex md:flex-row flex-col-reverse h-full max-h-[600px]`}
    >
      <div className="lg:max-w-[556px] w-full p-5 transition-all h-full lg:px-[85px] lg:py-[71px] bg-[#FEBF00]">
        <div className=" relative ps-[26px] pt-[20px] h-full">
          <DubbleCoute className="absolute top-0 -left-0" />
          <div className="border-0 border-b-2 h-full border-black pb-1">
            <div className="h-full flex flex-col justify-between gap-14">
              <LGText>{comment}</LGText>
              <div className="pb-[18px] flex items-center justify-between">
                <div>
                  <Text className="xl:text-lg font-bold">{name}</Text>
                  <p className="text-sm text-[#333333]">{location}</p>
                </div>
                <Image
                  src={img}
                  width={40}
                  height={40}
                  className="rounded-full w-[40px] h-[40px] object-cover"
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="borderDiv border-2 border-red"></div>
          </div>
        </div>
      </div>
      <div className="min-h-[320px] w-full h-full flex-grow border">
        <VideoPlayer video={video} vdoImg={vdoImg} />
      </div>
    </div>
  );
};

export default ReviewCard;
