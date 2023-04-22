import React from 'react'
import CarouselImage from './CarouselImage'

function HeroSection() {
  return (
    <div className='w-full'>
        <div className='md:w-2/3  mx-auto'>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-6xl mt-20'>Hideaway Coffee</h1>
            <p className='text-2xl mt-3'>Cafe in London</p>
            <p className='text-lg mt-0 pt-0'>Open today until 7:00 PM</p>
            <button className='bg-black text-white px-5 py-3 mt-1 rounded-md'>Contact Us</button>
            

        </div>
        <div className='mx-1 mt-2'>
        <CarouselImage/>
        </div>
        </div>
        
        
    </div>
  )
}

export default HeroSection