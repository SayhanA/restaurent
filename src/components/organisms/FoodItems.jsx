import React from "react";
import SaladImage from "@/assets/images/Salad-image.png";
import FoodItemsCarousal from "../molicules/FoodItemsCarousal";
import Image from "next/image";

const FoodItems = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();

  return (
    <section className="bg-[#fbf7f2] lg:py-[120px] md:py-[80px] sm:py-[40px] py-5 md:px-10 px-5">
      <Image
        src={SaladImage}
        width="526"
        height="490"
        className="absolute -start-[360px] -rotate-[80deg] xl:block hidden"
        alt="Picture of the author"
      />
      <div className="container mx-auto max-w-[1373.5px] relative">
        <FoodItemsCarousal categories={data?.categories} />
      </div>
    </section>
  );
};

export default FoodItems;
