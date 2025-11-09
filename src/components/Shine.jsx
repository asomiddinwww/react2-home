import React from 'react'
import shineimg1 from '../assets/img/shine.png'
import shineimg2 from '../assets/img/shine2.png'
import shineimg3 from '../assets/img/shine3.png'
import shin from '../assets/img/shin.png'

const Shine = () => {
  return (
    <div className="w-full bg-[#1c1c1c]">
        <div className="max-w-[1300px] flex m-auto pt-18 pb-30 pl-3 pr-3 text-[white] flex-col gap-10">
            <div className='w-full flex justify-between pr-25 border-1 border-[#747272a8] rounded-2xl max-[1000px]:flex-col gap-20 max-[1000px]:pr-0'>
                <div className='p-7 pt-9'>
                    <h1 className='text-[36px] font-[600]'>Car rental keeps you safe</h1>
                    <p className='max-w-[600px] pt-2 text-[16px] pb-20'>The safety of our employees and renters is our number one priority. In addition to being confident your vehicle is cleaned and sanitized every time you rent, you can also feel confident that we will take every opportunity to enhance the health and safety measures currently practiced in our operations.</p>
                    <div className='flex items-center gap-3 max-[549px]:flex-col gap-5'>
                        <div className='rounded-2xl p-4 bg-[#262626] hover:bg-[#299663] cursor-pointer transition-all duration-[200ms] hover:scale-102'>
                            <div className='pb-7 w-full flex justify-end items-end'>
                                <img src={shineimg1} alt="" />
                            </div>
                            <p className='max-w-[170px] text-[16px]'>Every car is thoroughly sanitized and cleaned</p>
                        </div>
                        <div className='rounded-2xl p-4 bg-[#262626] hover:bg-[#299663] cursor-pointer transition-all duration-[200ms] hover:scale-102'>
                            <div className='pb-13 w-full flex justify-end items-end'>
                                <img src={shineimg2} alt="" />
                            </div>
                            <p className='max-w-[170px] text-[16px]'>All of our employees wear masks</p>
                        </div>
                        <div className='rounded-2xl p-4 bg-[#262626] hover:bg-[#299663] cursor-pointer transition-all duration-[200ms] hover:scale-102'>
                            <div className='pb-7 w-full flex justify-end items-end'>
                                <img src={shineimg3} alt="" />
                            </div>
                            <p className='max-w-[170px] text-[16px]'>We stay up to date with all protocol from the CDC</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-end relative max-[1000px]:justify-center'>
                    <p className='absolute top-5 right-5  p-40 bg-[#299663] rounded-full max-[1000px]:left-10 right-10 max-[500px]:hidden'></p>
                    <img className='z-99 max-[500px]:w-[75vw]' src={shin} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shine