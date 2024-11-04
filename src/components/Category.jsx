import React from 'react'
import Data from '/src/Shared/Data'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-24'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>

        <div className='flex flex-wrap justify-center gap-5'>
            {Data.Category.map((category,index)=>(
              <Link key={index} to={'search/'+category.name}>
                <div className='border rounded-md items-center p-3 flex flex-col pt-3 px-16 hover:shadow-md cursor-pointer'>
                    <img src={category.icon} width={40} height={40}/>
                    <h2 className='mt-2 text-black'>{category.name}</h2>
                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Category