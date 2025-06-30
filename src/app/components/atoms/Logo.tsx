"use client"

import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'motion/react'

const inter = Inter({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] })
interface LogoProps {
  scrolled?: boolean
}


const Logo = ({scrolled}:LogoProps) => {
  return (
    <motion.div 
    initial={{x:-5,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5}}
    className={`xl:w-[150px] xl:h-[60px] md:w-[100px] md:h-[45px] w-[90px] h-[40px] xl:text-[2rem] text-[1.4rem] font-extrabold ${scrolled?'bg-transparent':'bg-[#DBDBDB]'} uppercase flex justify-center items-center ${inter.className}`}>
        <p>logo</p>
    </motion.div>
  )
}

export default Logo