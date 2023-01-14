// import React, { useRef, useState } from "react";
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
          breakpoints={{
        // when window width is >= 576px
            576: {
              slidesPerView: 1,
            },
        // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
        // when window width is >= 1024px
            1200: {
              spaceBetween: 30,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slice.map((element) => (
          <SwiperSlide key={element.id} Name={element.place} text={element.text}>
            <div
              className="cardSwiper"
              style={{ backgroundImage: `url(${element.image})` }}
              alt="Citys in the Algarve"
            >
              <div className="cardName">{element.place}</div>
              <div className="cardText">{element.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
