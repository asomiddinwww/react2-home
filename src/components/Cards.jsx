import React from "react";
import card from "../assets/img/car.png";
import user from "../assets/img/User.png";
import gear from "../assets/img/gear.png";
import pet from "../assets/img/petrol.png";
import fil from "../assets/img/File.svg";
import { LINKS } from "./card";

const Cards = () => {
  return (
    <div className="w-full bg-[#1c1c1c] pb-18">
      <div className="max-w-[1300px] m-auto pt-1 pb-5 pl-3 pr-3 text-[white]">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl pb-3 font-[600]">
            Choose the car of your dreams
          </h1>
          <p className="max-w-[575px]">
            We provide our customers with the most incredible driving emotions.
            That is why there are only world-class cars in our fleet
          </p>
          <div className="flex pt-9 items-center justify-center gap-7 max-[450px]:flex-col">
            <div className="pt-3.5 pb-3.5 pl-6 pr-6 rounded-full bg-[#1c1c1c] text-white border-1 hover:bg-[#299663] cursor-pointer">
              Compact
            </div>
            <div className="pt-3.5 pb-3.5 pl-6 pr-6 rounded-full bg-[#1c1c1c] text-white border-1 hover:bg-[#299663] cursor-pointer">
              Sports cars
            </div>
            <div className="pt-3.5 pb-3.5 pl-6 pr-6 rounded-full bg-[#1c1c1c] text-white border-1 hover:bg-[#299663] cursor-pointer">
              Vans{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          {LINKS.map((item) => (
            <div className="max-w-[410px] p-5 bg-[#262626] rounded-2xl flex flex-col justify-between">
              <h1 className="text-[25px] font-[600]">{item.title}</h1>
              <p>{item.eco}</p>
              <img className="pb-5" src={item.img} alt="" />
              <div className="flex gap-20">
                <div className="">
                  <p className="flex items-centr gap-2 pb-5">
                    <img src={user} alt="" />
                    {item.user}
                  </p>
                  <p className="flex items-centr gap-2">
                    <img src={fil} alt="" />
                    {item.year}
                  </p>
                </div>
                <div>
                  <p className="flex items-centr gap-2 pb-5">
                    <img src={gear} alt="" />
                    {item.score}
                  </p>
                  <p className="flex items-centr gap-2">
                    <img src={pet} alt="" />
                    {item.petrol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex pt-9 items-center justify-center gap-7">
          <div className="pt-3.5 pb-3.5 pl-6 pr-6 rounded-full text-white border-1 bg-[#299663] cursor-pointer">
            View all cars
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
