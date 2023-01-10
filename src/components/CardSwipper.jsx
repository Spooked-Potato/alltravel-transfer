import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { slice } from "./DataCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function CardSwipper() {
  return (
    <>
      <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
        //   breakpoints={{
        // // when window width is >= 576px
        //     576: {
        //       slidesPerView: 1,
        //     },
        // // when window width is >= 768px
        //     768: {
        //       spaceBetween: 10,
        //       slidesPerView: 2,
        //     },
        // // when window width is >= 1024px
        //     1024: {
        //       slidesPerView: 3,
        //     },
        //   }}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slice.map((element) => (
          <SwiperSlide key={element.id} Name={element.name} text={element.text}>
            <div
              className="cardSwiper"
              style={{ backgroundImage: `url(${element.image})` }}
              alt="Citys in the Algarve"
            >
              <div className="cardName">{element.name}</div>
              <div className="cardText">{element.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
