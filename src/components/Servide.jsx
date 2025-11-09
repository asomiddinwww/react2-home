import serviimg from '../assets/img/servi.png'
import serviimg2 from '../assets/img/Shield.png'
import serviimg3 from '../assets/img/userrr.png'
import serviimg4 from '../assets/img/wall.png'


const Service = () => {
  return (
    <div className="w-full bg-[#1c1c1c]">
        <div className="max-w-[1300px] flex m-auto pt-18 pb-30 pl-3 pr-3 text-[white] flex-col gap-10">
            <div className="w-full text-center">
                <h1 className="text-4xl font-[600] pb-4">Unparalleled service</h1>
                <p className="max-w-[650px] m-auto text-[16px]">Whether you are looking for Newark Airport car rental, an insurance replacement vehicle or minivan to take on vacation Car rental has it all.</p>
            </div>
            <div className='flex pb-15 flex-wrap gap-10 justify-center items-center'>
                <div className='max-w-[590] p-7 rounded-2xl bg-[#262626] hover:scale-104 cursor-pointer hover:bg-[#299663] transition-all duration-[200ms] max-[549px]:text-center'>
                    <div className='flex items-center gap-60 pb-4 max-[549px]:flex-col-reverse max-[549px]:text-center max-[549px]:gap-5'>
                        <h1 className='max-w-[251px] text-[36px] leading-[2.5rem]'>Book online, pay online</h1>
                        <img src={serviimg} alt="" />
                    </div>
                    <p className='max-w-[354px]'>Complete the booking process A-Z, with our easy online system</p>
                </div>
                 <div className='max-w-[590] p-7 rounded-2xl bg-[#262626] hover:scale-104 cursor-pointer hover:bg-[#299663] transition-all duration-[200ms] max-[549px]:text-center'>
                    <div className='flex items-center gap-55 pb-4 max-[549px]:flex-col-reverse max-[549px]:text-center max-[549px]:gap-5'>
                        <h1 className='max-w-[271px] text-[36px] leading-[2.5rem]'>Guaranteed car reservation</h1>
                        <img src={serviimg2} alt="" />
                    </div>
                    <p className='max-w-[374px]'>When you book with Car rental, you can be confident your car will be waiting for you</p>
                </div>
                 <div className='max-w-[590] p-7 rounded-2xl bg-[#262626] hover:scale-104 cursor-pointer hover:bg-[#299663] transition-all duration-[200ms] max-[549px]:text-center'>
                    <div className='flex items-center gap-45 pb-4 max-[549px]:flex-col-reverse max-[549px]:text-center max-[549px]:gap-5'>
                        <h1 className='max-w-[311px] text-[36px] leading-[2.5rem]'>Unparalleled customer service</h1>
                        <img src={serviimg3} alt="" />
                    </div>
                    <p className='max-w-[354px]'>We're here to help. We pride ourselves in our customer service</p>
                </div>
                 <div className='max-w-[590] p-7 rounded-2xl bg-[#262626] hover:scale-104 cursor-pointer hover:bg-[#299663] transition-all duration-[200ms] max-[549px]:text-center'>
                    <div className='flex items-center gap-53 pb-4 max-[549px]:flex-col-reverse max-[549px]:text-center max-[549px]:gap-5'>
                        <h1 className='max-w-[281px] text-[36px] leading-[2.5rem]'>No reservation or booking fees</h1>
                        <img src={serviimg4} alt="" />
                    </div>
                    <p className='max-w-[354px]'>No cancellation fees if cancelled 24 hours prior to booking time</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service