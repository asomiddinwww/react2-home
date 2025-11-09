import React from "react";
import branchimg1 from '../assets/img/branch1.png'
import branchimg2 from '../assets/img/branch2.png'
import branchimg3 from '../assets/img/branch3.png'
import branchimg4 from '../assets/img/branch4.png'
import branchimg5 from '../assets/img/branch5.png'
import branchimg6 from '../assets/img/branch6.png'

const Branch = () => {
  return (
    <div className="w-full bg-[#1c1c1c]">
      <div className="max-w-[1300px] flex m-auto pt-18 pb-30 pl-3 pr-3 text-[white] flex-col gap-10">
        <p className="text-2xl">More than 50 brands of cars</p>
        <div className="flex flex-wrap items-center gap-3 justify-between max-[500px]:justify-center">
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg1} alt="" /></a>
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg2} alt="" /></a>
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg3} alt="" /></a>
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg4} alt="" /></a>
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg5} alt="" /></a>
          <a href="/" className="hover:scale-110 transition-all duration-[200ms]"><img src={branchimg6} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Branch;
