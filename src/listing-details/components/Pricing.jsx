import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({carDetail}) {
  return (
    <div>
      {carDetail?.sellingPrice?
      <div className='p-10 rounded-xl border shadow-md text-left'>
          <h2>Our Price</h2>
          <h2 className='font-bold text-4xl'>$ {carDetail?.sellingPrice}</h2>

          <Button className='w-full mt-7' size='lg'><MdOutlineLocalOffer className='text-lg mr-2' />Make an Offer Price</Button>
      </div>:
        <div className='w-full h-[220px] mt-2 bg-slate-200 animate-pulse rounded-xl'></div>}
    </div>
  )
}

export default Pricing