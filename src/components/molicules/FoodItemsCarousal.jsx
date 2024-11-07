// // "use client";

// // import Image from "next/image";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// // import { CustomRightArrow } from "../atoms/CustomRightArrow";
// // import { CustomLeftArrow } from "../atoms/CustomLeftArrow";
// // import Text from "../atoms/Text";
// // import XText from "../atoms/XText";
// // import { Oswald } from "next/font/google";
// // import { useRef } from "react";
// // import SectionTitle from "./SectionTitle";

// // const bebas_nesu = Oswald({
// //   subsets: [],
// //   weight: "400",
// // });

// // const responsive = {
// //   desktop: {
// //     breakpoint: { max: 3000, min: 1024 },
// //     items: 4,
// //     slidesToSlide: 4,
// //   },
// //   tablet: {
// //     breakpoint: { max: 1024, min: 464 },
// //     items: 2,
// //     slidesToSlide: 2,
// //   },
// //   mobile: {
// //     breakpoint: { max: 464, min: 0 },
// //     items: 1,
// //     slidesToSlide: 1,
// //   },
// // };

// // const FoodItemsCarousal = ({ categories }) => {
// //   const carouselRef = useRef(null);

// //   return (
// //     <>
// //       <div className="flex lg:mb-[60px] md:mb-[40px] sm:mb-[25px] mb-[15px]">
// //         <SectionTitle
// //           titleHeadint="Crispy, Every Bite Taste"
// //           title="POPULAR FOOD ITEMS"
// //         />
// //       </div>
// //       <Carousel
// //         ref={carouselRef}
// //         responsive={responsive}
// //         showDots={false}
// //         infinite={true}
// //         autoPlay={false}
// //         keyBoardControl={true}
// //         customLeftArrow={<CustomLeftArrow />}
// //         customRightArrow={<CustomRightArrow />}
// //         className="overflow-hidden"
// //       >
// //         {categories.map(
// //           ({ id, strCategoryThumb, strCategory, strCategoryDescription }) => (
// //             <div
// //               key={`${id}+034029340`}
// //               className="px-2 w-[300px] h-[300px] bg-white flex justify-center items-center flex-col gap-4"
// //             >
// //               <Image
// //                 src={strCategoryThumb}
// //                 alt={`${strCategory} image`}
// //                 width={200}
// //                 height={120}
// //                 className="w-[200px] h-[120px]"
// //                 priority={false}
// //               />
// //               <div className="border-2 border-red w-[58px] mx-auto"></div>
// //               <XText
// //                 className={`${bebas_nesu.className} font-bold uppercase tracking-[-0.05em]`}
// //               >
// //                 {strCategory}
// //               </XText>
// //               <Text>{strCategoryDescription.slice(0, 20)}</Text>
// //             </div>
// //           )
// //         )}
// //       </Carousel>
// //     </>
// //   );
// // };

// // export default FoodItemsCarousal;

// import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { CustomRightArrow } from "../atoms/CustomRightArrow";
// import { CustomLeftArrow } from "../atoms/CustomLeftArrow";
// import Text from "../atoms/Text";
// import XText from "../atoms/XText";
// import { Oswald } from "next/font/google";
// import { useRef } from "react";
// import SectionTitle from "./SectionTitle";

// const bebas_nesu = Oswald({
//   subsets: [],
//   weight: "400",
// });

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// const FoodItemsCarousal = ({ categories }) => {
//   const carouselRef = useRef(null);

//   return (
//     <>
//       <div className="flex lg:mb-[60px] md:mb-[40px] sm:mb-[25px] mb-[15px] items-center justify-between">
//         <SectionTitle
//           titleHeadint="Crispy, Every Bite Taste"
//           title="POPULAR FOOD ITEMS"
//         />
//         <div className="flex items-center gap-4">
//           <CustomLeftArrow />
//           <CustomRightArrow />
//         </div>
//       </div>
//       <Carousel
//         ref={carouselRef}
//         responsive={responsive}
//         showDots={false}
//         infinite={true}
//         autoPlay={false}
//         keyBoardControl={true}
//         customLeftArrow={<CustomLeftArrow />}
//         customRightArrow={<CustomRightArrow />}
//         className="overflow-hidden"
//       >
//         {categories.map(
//           ({ id, strCategoryThumb, strCategory, strCategoryDescription }) => (
//             <div
//               key={`${id}+034029340`}
//               className="px-2 w-[300px] h-[300px] bg-white flex justify-center items-center flex-col gap-4"
//             >
//               <Image
//                 src={strCategoryThumb}
//                 alt={`${strCategory} image`}
//                 width={200}
//                 height={120}
//                 className="w-[200px] h-[120px]"
//                 priority={false}
//               />
//               <div className="border-2 border-red w-[58px] mx-auto"></div>
//               <XText
//                 className={`${bebas_nesu.className} font-bold uppercase tracking-[-0.05em]`}
//               >
//                 {strCategory}
//               </XText>
//               <Text>{strCategoryDescription.slice(0, 20)}</Text>
//             </div>
//           )
//         )}
//       </Carousel>
//     </>
//   );
// };

// export default FoodItemsCarousal;

"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomRightArrow } from "../atoms/CustomRightArrow";
import { CustomLeftArrow } from "../atoms/CustomLeftArrow";
import Text from "../atoms/Text";
import XText from "../atoms/XText";
import { Oswald } from "next/font/google";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";

const bebas_nesu = Oswald({
  subsets: [],
  weight: "400",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FoodItemsCarousal = ({ categories }) => {
  const carouselRef = useRef(null);

  // Function to go to the previous slide
  const goToPrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  // Function to go to the next slide
  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
      <div className="flex lg:mb-[60px] md:mb-[40px] sm:mb-[25px] mb-[15px] items-center justify-between">
        <SectionTitle
          titleHeadint="Crispy, Every Bite Taste"
          title="POPULAR FOOD ITEMS"
        />
        <div className="md:flex items-center gap-4 hidden">
          <CustomLeftArrow onClick={goToPrevious} />
          <CustomRightArrow onClick={goToNext} />
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        className="overflow-hidden"
      >
        {categories.map(
          ({ id, strCategoryThumb, strCategory, strCategoryDescription }) => (
            <div
              key={`${id}+034029340`}
              className="px-2 w-[300px] h-[300px] bg-white flex justify-center items-center flex-col gap-4 mx-auto"
            >
              <Image
                src={strCategoryThumb}
                alt={`${strCategory} image`}
                width={200}
                height={120}
                className="w-[200px] h-[120px]"
                priority={false}
              />
              <div className="border-2 border-red w-[58px] mx-auto"></div>
              <XText
                className={`${bebas_nesu.className} font-bold uppercase tracking-[-0.05em]`}
              >
                {strCategory}
              </XText>
              <Text>{strCategoryDescription.slice(0, 20)}</Text>
            </div>
          )
        )}
      </Carousel>
      <div className="flex items-center justify-center gap-4 md:hidden h-[100px]">
        <CustomLeftArrow onClick={goToPrevious} />
        <CustomRightArrow onClick={goToNext} />
      </div>
    </>
  );
};

export default FoodItemsCarousal;
