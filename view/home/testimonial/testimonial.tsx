"use client";

import { NewSwiper } from "@/components/new-swiper/new-swiper";
import React, { useMemo } from "react";
import Image from "next/image";

interface ITestimonialProps<T> {
  testimonials: {
    id: number;
    name: T;
    feedback: T;
    avatar: T;
  }[];
}

export function Testimonial({ testimonials }: ITestimonialProps<string>) {
  const slides = useMemo(() => {
    return testimonials.map((testM) => {
      return (
        <div className="px-10 py-10" key={testM.id}>
          <div className="relative w-10 h-10 mx-auto rounded-full overflow-hidden">
            <Image src={testM.avatar} alt={testM.name} fill />
          </div>
          <h3 className=" text-2xl font-bold text-center mt-1">
            {testM.name}{" "}
          </h3>
          <p className=" text-md font-light mt-5">{`"${testM.feedback}"`}</p>
        </div>
      );
    });
  }, [testimonials]);
  return (
    <section className="my-4">
      <h4 className=" mt-12 text-md text-center uppercase tracking-widest text-primary-700">
        testimonial
      </h4>
      <h2 className="text-4xl text-center capitalize font-extrabold mb-6 max-w-[25%] mx-auto">
        what our users say about us?
      </h2>

      <div className="w-[60%] mx-auto">
        <NewSwiper swiperProps={{ style: { width: "100%" } }} slides={slides} />
      </div>
    </section>
  );
}
