"use client"

import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] })
interface LogoProps {
  scrolled?: boolean
}


const Logo = ({scrolled}:LogoProps) => {
  return (
    <div className={`xl:w-[150px] xl:h-[60px] md:w-[100px] md:h-[45px] w-[90px] h-[40px] xl:text-[2rem] text-[1.4rem] font-extrabold ${scrolled?'bg-transparent':'bg-[#DBDBDB]'} uppercase flex justify-center items-center ${inter.className}`}>
        <p>logo</p>
    </div>
  )
}

export default Logo