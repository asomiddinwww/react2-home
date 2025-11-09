import gogle from "../assets/img/Google.png";
import line from "../assets/img/linee.png";
import imgg from "../assets/img/imgg.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

import { Pagination, Navigation } from "swiper/modules";
import style from './hear.module.css'

const Hear = () => {
  return (
    <div className="w-full bg-[#262626]">
      <div className="max-w-[1300px] flex m-auto pt-18 pb-18 pl-3 pr-3 text-[white] max-[1200px]:flex-col items-center">
        <div className="bg-[#1c1c1c] w-[600px] p-12.5 rounded-l-2xl flex flex-col items-start gap-3.5 max-[1201px]:rounded-bl-none max-[1201px]:rounded-t-2xl max-[654px]:max-w-full">
          <a
            href="/"
            className="flex items-center gap-2 text-[13.5px] text-blue-700"
          >
            <img src={gogle} alt="" /> From Google
          </a>
          <h1 className="text-[38px] max-w-[320px] pb-4 leading-[3rem]">
            Hear what the community is saying
          </h1>
          <div>
            <img src={line} alt="" />
          </div>
          <p className="text-[14px] pt-3 pb-2">
            More interesting reviews on Instagram
          </p>
          <button className="pt-3.5 cursor-pointer pb-3.5 pl-10 pr-10 bg-white rounded-full text-[black]">
            Instagram
          </button>
        </div>
        <div className="w-[850px] bg-[#299663] p-12 rounded-r-2xl max-[1200px]:w-[600px] max-[654px]:max-w-full max-[1201px]:rounded-t-none max-[1201px]:rounded-b-2xl max-[1201px]:p-6">
          <>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imgg} alt="" /></SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Hear;
