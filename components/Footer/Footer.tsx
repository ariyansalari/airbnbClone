import React from 'react'

export const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 '>

        <div>
            <h5 className='font-bold space-y-4 text-xs text-gray-800'>ABOUT</h5>
            <p>How Aribnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div>
        <h5 className='font-bold space-y-4 text-xs text-gray-800'>COMMUNITY</h5>
    <p>Accessibility</p>
    <p>This is not a real site</p>
    <p>Its a prettey clone</p>
    <p>Refrrals accepted</p>
    <p>Now</p>
        </div>

        <div>
        <h5 className='font-bold space-y-4 text-xs text-gray-800'>HOST</h5>
        <p>Presents</p>
    <p>here</p>
    <p>for</p>
    <p>Thousands of accommodation</p>
    <p>Join Now</p>
        </div>

        <div>
        <h5 className='font-bold space-y-4 text-xs text-gray-800'>SUPPORT</h5>
        <p>Help Center</p>
    <p>Trust & Safety</p>
    <p>Say Hi Youtube</p>
    <p>Easter Eggs</p>
    <p>For the Win</p>
        </div>
       
    </div>
  )
}
