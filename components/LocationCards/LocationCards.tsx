import React from 'react'
import { LocationCardsProps } from './locationCard.type'
import Image from 'next/image'

export const LocationCards = async({img,location,distance}:LocationCardsProps) => {

  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
<div className='relative h-16 w-16'>
    <Image src={img}  layout='fill' alt={location} className='rounded-lg'/>
</div>
<div >
    <h2>{location}</h2>
    <h3>{distance}</h3>
</div>
    </div>
  )
}
