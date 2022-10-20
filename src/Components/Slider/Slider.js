import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
import {Link} from 'react-router-dom'
import { EffectFade } from 'swiper';
import product from '../../assets/soap.png'
import product2 from '../../assets/handmade5.jpeg'
import product3 from '../../assets/handmade11.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
  import 'swiper/css/bundle';

import { Navigation } from "swiper";
const Slider = () => {
    return (
     <>
      <Swiper navigation={true}
        loop={true} 
        autoplay={{ delay: 2000 }}
        modules={[Navigation]} 
    
       className="mySwiper">
        <SwiperSlide>
          <div className="hero">
              <div class="hero-data">
            <h3 class="hero-subtitle">
                BEST PLACE TO SELL PRODUCTS
            </h3>
            <h1 class="hero-title">
                BUY , SELL AND ENJOY NEW JOURNEY
            </h1>
            <div class="promo-video-btn">
                    <Link to="/products">
                    <button class="btn">
                    shop now
                    </button>
                    </Link>
           
            </div>
        </div>
        <div class="hero-img">
            <img src={product} alt=" Dest mobile app" width="900px"/>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
                    <div className="hero">
              <div class="hero-data">
            <h3 class="hero-subtitle">
                BEST PLACE TO SELL PRODUCTS
            </h3>
            <h1 class="hero-title">
                BUY , SELL AND ENJOY NEW JOURNEY
            </h1>
            <div class="promo-video-btn">
    
                     <Link to="/products">
                    <button class="btn">
                    shop now
                    </button>
                    </Link>
           
            </div>
        </div>
        <div class="hero-img">
            <img src={product2} alt=" Dest mobile app" width="900px"/>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="hero">
              <div class="hero-data">
            <h3 class="hero-subtitle">
                BEST PLACE TO SELL PRODUCTS
            </h3>
            <h1 class="hero-title">
                BUY , SELL AND ENJOY NEW JOURNEY
            </h1>
            <div class="promo-video-btn">
    
                    <Link to="/products">
                    <button class="btn">
                    shop now
                    </button>
                    </Link>
           
            </div>
        </div>
        <div class="hero-img">
            <img src={product3} alt=" Dest mobile app" width="900px"/>
        </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    )
}

export default Slider
