import Image from 'next/image'
import React from 'react'
import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10'>
<div className='relative flex items-center h-10 cursor-pointer my-auto'>
    <Image src={'https://links.papareact.com/qd3'} layout='fill' objectFit='contain' objectPosition='left' alt='aribnbLogo'/>
</div>
<div className='flex items-center md:border-2 rounded-full overflow-hidden py-2  md:shadow-sm '>
    <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
    <MagnifyingGlassIcon className='hidden md:flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2  '/>
</div>

<div className='flex  space-x-4 items-center justify-end'>
    <p className='hidden md:inline cursor-pointer'>Become a host</p>
    <GlobeAltIcon className='h-6'/>
    <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
        <Bars3Icon className='h-6'/>
        <UserCircleIcon className='h-6 text-gray-400'/>
    </div>
</div>


    </header>
  )
}
