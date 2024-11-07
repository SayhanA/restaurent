import image from "@/assets/images/service.jpeg";
import CircularProgress from "@/assets/svgs/CircularProgress";
import Image from "next/image";
import ServicePannel from "../molicules/ServicePannel";
import ServicesCard from "../molicules/ServicesCard";
import { CardData } from "@/data/servicesCards";
import SaladImage from "@/assets/images/Salad-image.png";

const Services = ({ className }) => {
  return (
    <section
      id="service-section"
      className={`${className} relative h-fit overflow-hidden w-full`}
    >
      <Image
        src={SaladImage}
        width="auto"
        height="auto"
        className="w-[19%] -rotate-[22.18deg] absolute -end-[12%] bottom-0 xl:block hidden -z-10"
        alt="Picture of the author"
      />
      <div className="container mx-auto max-w-[1373.5px] h-fit my-[120px] md:px-10 px-5">
        <div className="flex min-[950px]:flex-nowrap flex-wrap w-full h-fit xl:gap-20 gap-10">
          <div className="min-[950px]:max-w-[617px] h-full w-full relative transition-all">
            <div className="bg-white absolute max-w-[240px] max-h-[136px] p-6 flex items-center justify-center rounded-xl mx-6 my-[30px]">
              <CircularProgress progress="50" className="w-full h-full" />
              <p className="w-[90px] font-semibold">Market Experience</p>
            </div>
            <Image
              src={image}
              width="auto"
              height="auto"
              alt="Picture of the author"
              className="h-full w-full transition-all"
            />
          </div>
          <div className="w-full min-[950px]:min-h-full min-[500px]:h-[250px] h-[370px] max-h-fit">
            <ServicePannel />
          </div>
        </div>
        <div className="pt-[70px] flex justify-between flex-wrap gap-5">
          {CardData.map(({ id, icon, title, description }) => (
            <ServicesCard
              key={id}
              icon={icon}
              title={title}
              description={description}
              className="z-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
