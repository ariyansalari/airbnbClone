import Image from 'next/image'
import React from 'react'
import { CityCardProps } from './cityCard.type'

export const CityCard = ({title,img}:CityCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>

    <div className='relative h-80 w-80'>
<Image src={img} layout='fill' alt={title} objectFit='cover' className='rounded-xl'/>
    </div>
    <h3 className='text-2xl mt-3'>{title}</h3>
    </div>

  )
}
