import { ButtonMain } from "@/components/button/button-main";
import React from "react";
import Image from "next/image";

interface IHeroProps {
  headline: string;
  subheadline: string;
  ctaButtons: {
    text: string;
    link: string;
  }[];
}

export function Hero({ headline, subheadline, ctaButtons }: IHeroProps) {
  return (
    <section className="border border-yellow-400 flex">
      <div className="basis-[50%] flex flex-col gap-5">
        <h1 className=" text-5xl capitalize  font-extrabold">{headline}</h1>
        <p className=" text-md capitalize">{subheadline}</p>
        <div>
          {ctaButtons.map((button, index) => {
            return (
              <ButtonMain
                style={{
                  color: index === 1 ? "black" : "",
                  backgroundColor: index === 1 ? "transparent" : "",
                }}
                key={index}
              >
                {button.text}
              </ButtonMain>
            );
          })}
        </div>
        <div className="relative w-[34rem] h-[23rem]">
          <Image src={"/images/hero/hero-banner.png"} fill alt="" />
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mt-[-3rem]">
          <div className="absolute  w-[35rem] h-[44rem] z-30">
            <Image src={"/images/hero/phone-1.png"} fill alt="" />
          </div>
          <div className="absolute  w-[35rem] h-[44rem] left-[6.5rem] top-[4rem] z-20">
            <Image src={"/images/hero/phone-2.png"} fill alt="" />
          </div>

          <div className="absolute  w-[35rem] h-[44rem] left-[12.5rem] top-[6rem] z-10">
            <Image src={"/images/hero/phone-1.png"} fill alt="" />
          </div>
          <div className="absolute w-[40rem] h-[40rem] left-[5rem] top-[0rem]">
            <Image src={"/images/hero/ellipse-1.png"} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
