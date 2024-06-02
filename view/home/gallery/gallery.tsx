"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";

//* dynamically import the componet for lightbox as it's not needed on start
const Lightbox = dynamic(() => import("yet-another-react-lightbox"));

const galleryImages = [
  { id: 1, image: "/images/gallery/phone-12.png" },
  { id: 2, image: "/images/gallery/phone-13.png" },
];
export function Gallery() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <h3 className=" mt-12 text-md text-center uppercase tracking-widest text-primary-700">
        gallery
      </h3>
      <h2 className="text-4xl text-center capitalize font-extrabold mb-6">
        The best experiance
      </h2>
      <Swiper navigation={true} modules={[Navigation]} centeredSlides={true}>
        {galleryImages.map((galleryImage) => {
          return (
            <SwiperSlide
              onClick={() => {
                setOpen(true);
              }}
              key={galleryImage.id}
              className=" hover:cursor-pointer"
            >
              <div className=" relative w-[20rem] h-[38rem]">
                <Image
                  src={galleryImage.image}
                  className="w-full h-full "
                  alt="features"
                  fill
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((galleryImage) => {
          return { src: galleryImage.image };
        })}
      />
    </section>
  );
}
