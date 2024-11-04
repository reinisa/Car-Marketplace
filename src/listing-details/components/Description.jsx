import React from 'react'

function Description({carDetail}) {
  return (
    <div>
        <div className='p-6 rounded-xl bg-white shadow-md text-left mt-5 border'>
            <h2 className='mt-0 my-2 font-medium text-2xl'>Description</h2>
            {carDetail?.listingDescription?
            <div>
              <p>{carDetail?.listingDescription}</p>
            </div>:
            <div className='w-full h-[50px] bg-slate-200 animate-pulse rounded-xl'></div>}
        </div>
    </div>
  )
}

export default Description