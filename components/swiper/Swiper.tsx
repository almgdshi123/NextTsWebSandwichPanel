"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { dataSwiper } from "../dataSwiper";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="subscribe">
              <img
                src={item.image}
                alt={item.description}
                title={item.title}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <h2>{item.title}</h2>
              <br />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
