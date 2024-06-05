import Image from "next/image";
import React from "react";
interface IFeatureProps {
  features: { title: string; description: string; icon: string; id: number }[];
}

export function Features({ features }: IFeatureProps) {
  return (
    <section className="flex max-lg:flex-col max-lg:gap-8">
      <div className="basis-[50%] max-lg:order-2">
        <div className="relative  max-w-[30rem] h-[32rem] mx-auto">
          <div className=" absolute w-full h-full z-10 left-[50%] translate-x-[-50%]">
            <Image
              src={"/images/features/phone-11.png"}
              className=""
              alt="features"
              fill
              objectFit="contain"
            />
          </div>
          <div className="absolute w-full h-full">
            <Image src={"/images/hero/ellipse-1.png"} fill alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1 max-sm:mt-1 mt-12">
        <h4 className=" text-md uppercase tracking-widest text-primary-700">
          Features
        </h4>
        <h2 className="text-4xl capitalize font-extrabold mb-6">
          The best app
        </h2>
        <ul className="flex flex-col gap-7">
          {features.map((feature) => {
            return (
              <li key={feature.id} className="text-md max-xl:pr-1 pr-[10rem] ">
                <h4 className=" font-semibold mb-2">{feature.title}</h4>
                <p className=" font-normal">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
