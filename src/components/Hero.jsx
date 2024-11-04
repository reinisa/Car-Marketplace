import React from 'react'
import Search from './Search'

function Hero() {
    return (
        <div>
            <div className='flex flex-col items-center p-10 py-16 gap-6 h-[577px] w-full bg-[#eef0fc]'>
                <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
                <h2 className='text-[60px] fnt-bold'>Find Your Dream Car</h2>
                <Search />
                <img src='/BMW760LI.png' className='bg-transparent'/>
            </div>
        </div>
    )
}

export default Hero