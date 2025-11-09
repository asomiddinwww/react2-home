import React from 'react'
import fotlogo from '../assets/img/fot-logo.png'
import ins from '../assets/img/instagram.png'
import tw from '../assets/img/tw.png'
import fac from '../assets/img/fac.png'
import wat from '../assets/img/wat.png'
import up from '../assets/img/Aup.png'

const Footerr = () => {
  return (
    <div className="w-full bg-[#1c1c1c] border-1 border-[#333333]">
        <div className="max-w-[1300px] flex m-auto pt-14 pl-3 pr-3 text-[white] flex-col gap-10">
            <div className='w-full flex justify-between pr-30 border-b-1 pb-10 border-[#4a4949] max-[984px]:flex-col gap-9 max-[983px]:pr-5 max-[983px]:pl-5'>
                <div>
                    <a href="#"><img src={fotlogo} alt="" /></a>
                    <p className='pt-7 max-w-[240px] text-[13px]'>Car rental offers a wide range of cars available for rent in Newark EWR Airport NJ. We pride ourselves in our customer service, and hassle-free renting experience.</p>    
                </div>
                <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Main</li>
                    <li><a className='hover:border-b-1 text-white' href="/">My Bookings</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">Reservation</a></li>
                </ul>
                <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Categories</li>
                    <li><a className='hover:border-b-1 text-white' href="/">Compact</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">Sports cars</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">Vans </a></li>
                </ul>
                 <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Company</li>
                    <li><a className='hover:border-b-1 text-white' href="/">About us</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">Careers</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">News</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">Contact us</a></li>
                </ul>
                <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Our Locations</li>
                    <li><a className='hover:border-b-1 text-white' href="/">2118 Thornridge Cir. Syracuse</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">4140 Parker Rd. Allentown</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">4517 Washington Ave.</a></li>
                </ul>
            </div>
            <div className='w-full flex justify-between border-b-1 pb-10 border-[#4a4949] max-[984px]:flex-col gap-9 max-[983px]:pl-5'>
                <div className='flex items-center pr-10'>
                    <h1 className='text-[20px] max-w-[200px]'>© 2022 Car rental Terms & Conditions</h1>
                </div>
                <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Contact</li>
                    <li><a className='hover:border-b-1 text-white' href="/">+1 855 420 0000</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">carrental@gmail.com</a></li>
                </ul>
                <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Hours of operation</li>
                    <li><a className='hover:border-b-1 text-white' href="/">8:00 - 21:00 Mon-Sat</a></li>
                    <li><a className='hover:border-b-1 text-white' href="/">9:00 - 15:00 Sundays</a></li>
                </ul>
                 <ul className='flex flex-col gap-2 pt-2.5'>
                    <li className='pb-2 font-[600]'>Social network</li>
                    <ul className='flex gap-3 pr-20'>
                    <li><a className='flex items-center justify-center pt-2 pb-2 pl-2 pr-2 rounded-full bg-amber-50 hover:bg-[#f70078]' href="/"><img className='w-full' src={ins} alt="" /></a></li>
                    <li><a className='flex items-center justify-center pt-2.5 pb-2.5 pl-2 pr-2 rounded-full bg-amber-50 hover:bg-[#1c9ae8]' href="/"><img className='w-full' src={tw} alt="" /></a></li>
                    <li><a className='flex items-center justify-center pt-1.5 pb-1.5 pl-3 pr-3 rounded-full bg-amber-50 hover:bg-[#0f6bff]' href="/"><img className='w-3' src={fac} alt="" /></a></li>
                    <li><a className='flex items-center justify-center pt-2 pb-2 pl-2 pr-2 rounded-full bg-amber-50 hover:bg-[#4fc95d]' href="/"><img className='w-full' src={wat} alt="" /></a></li>
                    </ul>
                    
                </ul>
                <a href='/' className='flex items-end justify-end pl-10'><img  className='p-4 bg-[#4fc95d] rounded-full' src={up} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footerr