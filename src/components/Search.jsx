import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
// import { Separator } from '@radix-ui/react-separator'
import { Separator } from './ui/separator'
import { CiSearch } from "react-icons/ci";
import Data from '/src/Shared/Data'
import { Link } from 'react-router-dom';

function Search() {

    const [cars,setCars]=useState();
    const [make,setMake]=useState();
    const [price,setPrice]=useState();

  return (
    <div className='p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-11 px-5 items-center w-[70%] md:w-max'>
        <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Used">Used</SelectItem>
            <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
        </SelectContent>
        </Select>

        <Separator orientation="vertical" className="hidden md:block"/>

        <Select onValueChange={(value)=>setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Car Brand" />
        </SelectTrigger>
        <SelectContent>
            {Data.CarBrands.map((brand,index)=>(
                <div key={index}>
                    <SelectItem value={brand.name}>{brand.name}</SelectItem>
                </div>
            ))}

        </SelectContent>
        </Select>

        <Separator orientation="vertical" className="hidden md:block"/>

        <Select onValueChange={(value)=>setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {Data.Pricing.map((price,index)=>(
                <div key={index}>
                <SelectItem value={price.amount}>{price.amount}</SelectItem>
                </div>
            ))}

        </SelectContent>
        </Select>
        <Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>
           <CiSearch className='text-[45px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' /> 
        </Link>

    </div>
  )
}

export default Search