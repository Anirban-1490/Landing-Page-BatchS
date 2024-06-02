import Image from "next/image";
import React from "react";
interface IFeatureProps {
  features: { title: string; description: string; icon: string; id: number }[];
}

export function Features({ features }: IFeatureProps) {
  return (
    <section className="flex">
      <div className="basis-[50%]">
        <div className="relative mt-[-3rem]">
          <div className=" absolute w-[30rem] h-[45rem] z-10 left-[50%] translate-x-[-50%]">
            <Image
              src={"/images/features/phone-11.png"}
              className="w-full h-full "
              alt="features"
              fill
            />
          </div>
          <div className="absolute w-[40rem] h-[40rem] ">
            <Image src={"/images/hero/ellipse-1.png"} fill alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1 mt-12">
        <h3 className=" text-md uppercase tracking-widest text-primary-700">
          Features
        </h3>
        <h2 className="text-4xl capitalize font-extrabold mb-6">
          The best app
        </h2>
        <ul className="flex flex-col gap-7">
          {features.map((feature) => {
            return (
              <li key={feature.id} className="text-md pr-[10rem] ">
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
