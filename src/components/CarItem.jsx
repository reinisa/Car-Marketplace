import React from 'react'
import { Separator } from './ui/separator'
import { LuFuel } from "react-icons/lu";
import { RiSpeedUpFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';

function CarItem({car}) {
  return (
    <Link to={'/listing-details/'+car?.id}>
        <div className='rounded-xl bg-white border hover:shadow-lg cursor-pointer'>
            <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
            <img src={car?.images[0]?.imageUrl} width={'100%'} height={250} 
                className='rounded-t-xl md:h-[170px] lg:h-[250px] object-cover'/>

            <div className='p-4'>
                <h2 className='font-bold text-black mb-2 text-lg text-left'>{car?.listingTitle}</h2>
                <Separator/>
                <div className='grid grid-cols-3 mt-5'>
                    <div className='flex flex-col items-center'>
                        <LuFuel className='text-lg mb-2'/>
                        <h2 className='text-left'>{car?.mileage} Km</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <RiSpeedUpFill className='text-lg mb-2' />   
                        <h2 className='text-left'>{car?.fuelType}</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGearStickPattern className='text-lg mb-2'/>
                        <h2 className='text-left'>{car?.transmission}</h2>
                    </div>
                </div>
                <Separator className='my-2'/>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>${car?.sellingPrice}</h2>
                    <h2 className='text-primary text-md flex gap-2 items-center'>
                        View Details <MdOpenInNew />
                    </h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarItem