import React from 'react'
import { HiCalendarDays } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { BiSolidGasPump } from "react-icons/bi";

function DetailHeader({carDetail}) {
  return (
    <div>
        {carDetail?.listingTitle?
        <div>
            <h2 className='font-bold text-3xl text-left'>
                {carDetail?.listingTitle}
                <p className='text-sm'>{carDetail?.tagline}</p>
            </h2>

            <div className='flex gap-2 mt-3'>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                    <HiCalendarDays className='h-7 w-7 text-primary'/>
                    <h2 className='text-primary text-sm'>{carDetail?.year}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                    <BsSpeedometer2 className='h-7 w-7 text-primary'/>
                    <h2 className='text-primary text-sm'>{carDetail?.mileage}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                    <GiGearStickPattern className='h-7 w-7 text-primary'/>
                    <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                    <BiSolidGasPump className='h-7 w-7 text-primary'/>
                    <h2 className='text-primary text-sm'>{carDetail?.fuelType}</h2>
                </div>
            </div>
        </div>:
        <div className='w-full h-[120px] rounded-xl bg-slate-200 animate-pulse'>
        </div>}
    </div>
  )
}

export default DetailHeader