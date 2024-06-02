import React from "react";
import Image from "next/image";
import { ButtonMain } from "../button/button-main";
export function Navbar() {
  return (
    <header className="flex justify-between items-center mt-5">
      <nav className="flex gap-10 items-center">
        <div className="relative w-[7rem] h-8">
          <Image
            src={"/images/logo-main.png"}
            className=""
            fill
            alt="logo-main"
          />
        </div>
        <ul className=" flex gap-6 text-[20px]">
          <li className="text-[#ff5555]">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </nav>
      <div className="mr-[14rem]">
        <ButtonMain>Download</ButtonMain>
      </div>
    </header>
  );
}
