/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
<Image  src={'/images/country.avif'} layout='fill' objectFit='cover' objectPosition='bottom' alt='herosection-image' />
<div className='absolute top-1/2 w-full text-center text-white sm:text-lg '>
    <p>Not sure where to go? Perfect.</p>

    <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150 '>I'm flexible</button>
</div>
    </div>
  )
}
