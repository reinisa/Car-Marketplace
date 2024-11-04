import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Features({features}) {

    console.log(features);

  return (
    <div className='mt-6 text-left'>
        <div className='p-6 bg-white rounded-xl border shadow-md'>
            <h2 className='font-medium text-2xl'>Features</h2>
            {features?
            <div className='grid grid-cols-2 md:grid-cols-3 mt-3 lg:grid-cols-4 gap-5'>
                {features&&Object.entries(features).map(([features,value])=>(
                    <div className='flex gap-2 items-center'>
                        <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary'/>
                        <h2>{features}</h2>
                    </div>
                ))}
            </div>
            :
            <div className='w-full h-[100px] rounded-xl bg-slate-200 animate-pulse'></div>}
        </div>
    </div>
  )
}

export default Features