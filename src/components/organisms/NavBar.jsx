import NavLogoSvg from "@/assets/svgs/NavLogoSvg";
import React from "react";
import PrimaryBtn from "../atoms/PrimaryBtn";
import { NavList } from "@/data/navbar";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-[#be3d1e] py-[35px] sticky top-0 left-0 px-5 z-40">
      <div className="container mx-auto flex justify-between max-w-[1373.5px]">
        <div className="flex items-center gap-[60px]">
          <NavLogoSvg />
          <div className="gap-[40px] hidden lg:flex">
            {NavList.map(({ id, page, link }) => (
              <Link className="font-medium text-white" key={id} href={link}>
                {page}
              </Link>
            ))}
          </div>
        </div>
        <PrimaryBtn className="hidden lg:flex">Book a table</PrimaryBtn>
        <div className="menu lg:hidden">
          <input type="checkbox" id="menu-toggle" />
          <div className="menu-content">
            <label htmlFor="menu-toggle" className="menu-button z-50">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="gap-[30px] flex flex-col">
              {NavList.map(({ id, page, link }) => (
                <Link
                  className="font-medium text-white text-lg mx-7 hover:text-[20px] hover:text-black transition-all sm:text-start text-center"
                  key={id}
                  href={link}
                >
                  {page}
                </Link>
              ))}
            </div>
            <PrimaryBtn className="primary-btn absolute bottom-0 w-full font-bold py-5">
              Book a table
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
