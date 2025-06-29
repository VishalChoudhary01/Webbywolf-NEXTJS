import React from 'react'
import Image from 'next/image'
import hero from './../../../../public/images/hero/Hero.png'

const Hero = () => {
  return (
    <section className='w-full flex flex-col relative'>
        <div className='w-full flex'>
        <div className='w-[60%]'>

        </div>
        <div className='w-[40%] h-auto md:block hidden clip-diagonal '>
        <Image src={hero} alt='hero'  className='object-fill' />
        </div>
        </div>
        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  )
}

export default Hero