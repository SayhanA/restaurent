/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoPlayer = ({ video = "", vdoImg = "" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ReactPlayer
      width="100%"
      height="100%"
      controls={true}
      light={
        <Image
          src={vdoImg}
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="Picture of the author"
        />
      }
      url={video}
    />
  );
};

export default VideoPlayer;
