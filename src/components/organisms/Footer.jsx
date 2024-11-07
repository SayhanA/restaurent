import FooterImage from "@/assets/images/footerImage.jpeg";
import SectionHeader from "../atoms/SectionHeader";
import { footerContents, footerLinks } from "@/data/footerData";
import XText from "../atoms/XText";
import Text from "../atoms/Text";
import { Oswald, Xanh_Mono } from "next/font/google";
import Link from "next/link";
import XLText from "../atoms/XLText";

const bebas_nesu = Oswald({
  subsets: [],
  weight: "400",
});

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${FooterImage.src})`,
        backgroundColor: "#000000d0",
        backgroundBlendMode: "darken",
      }}
      className="bg-cover bg-center flex items-center justify-start py-[140px] bg-[#000000c4] text-white"
    >
      <div className="container px-10 mx-auto text-white">
        <SectionHeader className="text-white text-center">
          We ready to have you the best dining experiences
        </SectionHeader>
        <div className="flex justify-between mt-12 mb-[120px] flex-wrap gap-5">
          {footerContents?.map(({ id, icon, title, text, text_2 }) => (
            <div
              key={id}
              className="flex flex-col justify-center text-center items-center gap-6 mx-auto max-w-[250px]"
            >
              <p className="text-[#FEBF00]">{icon}</p>
              <XText
                className={`${bebas_nesu.className} font-bold uppercase tracking-[-0.05em] text-white`}
              >
                {title}
              </XText>
              <div className="text-[#F7F8F9]">
                <Text className="text-[#F7F8F9]">{text}</Text>
                {text_2 && <Text className="text-[#F7F8F9]">{text_2}</Text>}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          {footerLinks?.map(({ id, icon, link }) => (
            <Link key={id} href={link}>
              {icon}
            </Link>
          ))}
        </div>
        <XText className="mt-6 text-white font-normal text-center">
          © 2023 All Rights Reserved
        </XText>
      </div>
    </footer>
  );
};

export default Footer;
