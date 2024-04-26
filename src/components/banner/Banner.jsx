import React from 'react'
import "../../sass/__banner.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/strawberry.png"
import img7 from "../../assets/images/vagitables.png"

import {  Autoplay, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <div className='banner__swipper'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swipper__item s_item1'>
          <div className="dec1">
            <img src={img1} alt="" />
          </div>
          <div className="dec2">
            <img src={img2} alt="" />
          </div>
          <div className="dec3">
            <img src={img3} alt="" />
          </div>
          <div className="dec4">
            <img src={img4} alt="" />
          </div>
           <div className="dec5">
            <img src={img5} alt="" />
          </div>
          <div className='organic'>
              <span>100%</span>
              <h4>Organic Vegetables</h4>
          </div>
            <h1>The best way to stuff your wallet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
        </SwiperSlide>
        <SwiperSlide className='swipper__item s_item1'>
          <div className="dec1">
            <img src={img1} alt="" />
          </div>
          <div className="dec2">
            <img src={img2} alt="" />
          </div>
          <div className="dec3">
            <img src={img3} alt="" />
          </div>
          <div className="dec4">
            <img src={img4} alt="" />
          </div>
           <div className="dec5">
            <img src={img6} alt="" />
          </div>
          <div className='organic'>
              <span>100%</span>
              <h4>Organic Vegetables</h4>
          </div>
            <h1>Everyday Fresh &Clean with OurProducts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
        </SwiperSlide>
        <SwiperSlide className='swipper__item s_item1'>
          <div className="dec1">
            <img src={img1} alt="" />
          </div>
          <div className="dec2">
            <img src={img2} alt="" />
          </div>
          <div className="dec3">
            <img src={img3} alt="" />
          </div>
          <div className="dec4">
            <img src={img4} alt="" />
          </div>
           <div className="dec5">
            <img src={img7} alt="" />
          </div>
          <div className='organic'>
              <span>100%</span>
              <h4>Organic Vegetables</h4>
          </div>
            <h1>Make your BreakfastHealthy and Easy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Banner