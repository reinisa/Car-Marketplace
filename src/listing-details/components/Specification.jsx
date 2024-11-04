import IconField from '@/add-listing/components/IconField'
import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'

function Specification({carDetail}) {
  return (
    <div className='p-10 rounded-xl border shadow-md mt-7'>
        <h2 className='font-medium text-xl text-left'>Specifications</h2>
        {carDetail?CarSpecification.map((item,index)=>(
            <div key={index} className='mt-6 flex item-center justify-between'>
                <h2 className='flex gap-2'><IconField icon={item.icon}/>{item.label}</h2>
                <h2>{carDetail?.[item?.name]}</h2>
            </div>
        ))
        :
        <div className='w-full h-[650px] rounded-xl bg-slate-200 animate-pulse mt-7'></div>}
    </div>
  )
}

export default Specification