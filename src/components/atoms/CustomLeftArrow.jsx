import LeftSvg from "@/assets/svgs/LeftSvg";

export const CustomLeftArrow = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`carousalLefttBtn absolute md:top-[10%] md:-translate-y-1/2 md:end-20 z-10 p-2 text-black h-[60px] w-[60px] rounded-full bg-white shadow-xl drop-shadow-xl flex justify-center items-center end-[60%] ${className}`}
    >
      <LeftSvg />
    </button>
  );
};
