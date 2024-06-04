import React from "react";
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface ISwiperProps {
  slides: any[];
  swiperProps?: SwiperProps;
  slideProps?: SwiperSlideProps;
}

export function NewSwiper({ slides, swiperProps, slideProps }: ISwiperProps) {
  return (
    <Swiper
      {...swiperProps}
      navigation={true}
      modules={[Navigation]}
      centeredSlides={true}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={slide.id || index}
            className=" hover:cursor-pointer"
            {...slideProps}
          >
            {slide}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
