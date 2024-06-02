import Image from "next/image";
import React from "react";

export function Features() {
  return (
    <section className="flex">
      <div className="basis-[50%]">
        <div className="relative mt-[-3rem]">
          <div className=" absolute w-[34rem] h-[50rem] z-10 left-[50%] translate-x-[-50%]">
            <Image
              src={"/images/features/phone-11.png"}
              className="w-full h-full "
              alt="some-alt"
              fill
            />
          </div>
          <div className="absolute w-[40rem] h-[40rem] ">
            <Image src={"/images/hero/ellipse-1.png"} fill alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className=" text-md uppercase tracking-widest">Features</h3>
        <h2 className="text-4xl capitalize font-extrabold">The best app</h2>
      </div>
    </section>
  );
}
