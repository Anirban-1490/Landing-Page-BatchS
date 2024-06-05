import React from "react";
import Image from "next/image";
import { ButtonMain } from "../button/button-main";
import { MenuOutlined } from "@ant-design/icons";
export function Navbar() {
  return (
    <header className="flex justify-between items-center mt-5">
      <nav className="flex gap-2 items-center">
        <div className="relative w-[7rem] h-8">
          <Image
            src={"/images/logo-main.png"}
            className=""
            fill
            alt="logo-main"
          />
        </div>
        <ul className=" max-md:hidden flex gap-6  text-md">
          <li className="text-[#ff5555]">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </nav>
      <div className=" max-md:hidden mr-[2%] max-lg:mr-0">
        <ButtonMain className=" hover:bg-primary-700 hover:text-white">
          Download
        </ButtonMain>
      </div>
      <button className=" max-md:block hidden">
        <MenuOutlined className=" text-2xl" />
      </button>
    </header>
  );
}
