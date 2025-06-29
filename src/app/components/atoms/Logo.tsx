import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Logo = () => {
  return (
    <div className={`xl:w-[150px] xl:h-[60px] xl:text-[2rem] font-extrabold bg-[#DBDBDB] uppercase flex justify-center items-center ${inter.className}`}>
        <p>logo</p>
    </div>
  )
}

export default Logo