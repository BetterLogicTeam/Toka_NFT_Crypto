import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

function Slider() {
  return (
    <div>
         <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider