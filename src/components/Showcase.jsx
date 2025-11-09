import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import swiperimg from '../assets/img/swiperimg.png'
import sear from '../assets/img/search.png'

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";



const Showcase = () => {

    
  return (
    <div className="w-full bg-[#1c1c1c]">
      <div className="max-w-[1300px] m-auto pt-5 pb-3 pl-3 pr-3 text-[white]">
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full rounded-2xl" src={swiperimg} alt="" /></SwiperSlide>
          </Swiper>
        </>
        <div className="inputs pb-15.5 pt-14.5 flex justify-center items-center pl-3 pr-3">
            <div className="flex w-[650px] items-center justify-between gap-2 pb-1.5 pt-1.5 pl-7 pr-1.5 bg-white rounded-full absolute mb-30 z-999 max-[654px]:max-w-full">
            <input type="text" className="text-[#221f1f] outline-0 w-full" placeholder="Find the car of your dreams"/>
            <button className="cursor-pointer bg-[#299764] p-2.5 rounded-full"><img className="w-7" src={sear} alt="" /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
