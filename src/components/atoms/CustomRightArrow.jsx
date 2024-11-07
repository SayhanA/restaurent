import RightSvg from "@/assets/svgs/RightSvg";

export const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="carousalRightBtn absolute md:top-[10%] md:-translate-y-1/2 md:end-0 border end-[30%] bg-white z-10 p-2 text-black h-[60px] w-[60px] rounded-full shadow-xl drop-shadow-xl flex justify-center items-center"
    >
      <RightSvg />
    </button>
  );
};
