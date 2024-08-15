'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./swiperPage.css";
import { databaseImage } from '../dataSwiper';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperPage({data}) {
  return (
    <>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {data.map((item, index) => (
        <SwiperSlide key={index} >
          <img src={databaseImage[item].image}  alt={databaseImage[item].alt} loading="lazy" title={databaseImage[item].title} />
        </SwiperSlide>))}
   
      </Swiper>
    </>
  );
}
