"use client";

import React, { useMemo, useState } from "react";

import Image from "next/image";
import "yet-another-react-lightbox/styles.css";

import dynamic from "next/dynamic";
import { NewSwiper } from "@/components/new-swiper/new-swiper";

//* dynamically import the componet for lightbox as it's not needed on start
const Lightbox = dynamic(() => import("yet-another-react-lightbox"));

const galleryImages = [
  { id: 1, image: "/images/gallery/phone-12.png" },
  { id: 2, image: "/images/gallery/phone-13.png" },
];
export function Gallery() {
  const [open, setOpen] = useState(false);

  const slides = useMemo(() => {
    return galleryImages.map((gimg) => {
      return (
        <div key={gimg.id} className=" relative max-w-[20rem] h-[38rem]">
          <Image
            src={gimg.image}
            className="w-full h-full "
            objectFit="contain"
            alt="features"
            fill
          />
        </div>
      );
    });
  }, []);

  return (
    <section>
      <h4 className=" mt-12 text-md text-center uppercase tracking-widest text-primary-700">
        gallery
      </h4>
      <h2 className="text-4xl text-center capitalize font-extrabold mb-6">
        The best experiance
      </h2>
      <NewSwiper
        slideProps={{
          onClick: () => {
            setOpen(true);
          },
        }}
        slides={slides}
      />
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
