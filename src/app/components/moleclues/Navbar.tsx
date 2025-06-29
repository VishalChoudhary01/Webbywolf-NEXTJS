"use client"
import React, { useState } from 'react'
import Logo from '../atoms/Logo'
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';
import { Inter } from 'next/font/google';
import Button from '../atoms/Button';

const inter = Inter({ subsets: ['latin'] })

const menuItems = [
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  return (
    <nav className='w-full fixed z-20 flex items-center justify-between xl:px-[5rem] py-3 '>
      <Logo />
      <ul className='flex gap-x-[2.9rem]'>
        {menuItems.map((item, index) => (
          <div key={index} className={`relative ${inter.className}`}>
            <div
              className="cursor-pointer text-[#1959AC] lg:text-[18px] md:text-[1rem] font-medium flex items-center space-x-2"
              onClick={() => toggleDropdown(index)}
            >
              <span>{item.label}</span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`}
              />
            </div>

            <AnimatePresence>
              {openDropdown === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                  className="absolute mt-2 bg-white rounded shadow-md w-40 z-10 overflow-hidden"
                >
                  <div className="py-2">
                    {item.options.map((option, i) => (
                      <p key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{option}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </ul>
        <Button buttonText='Sign In' buttonStyle={`text-[15px] bg-[#fff] lg:px-[2.625rem] py-[0.813rem] rounded-[5px] shadow-md text-black ${inter.className} font-bold  `} />
    </nav>
  );
};

export default Navbar;
