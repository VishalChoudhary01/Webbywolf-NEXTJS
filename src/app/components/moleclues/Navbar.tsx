"use client"
import React, { useState, useEffect } from 'react'
import Logo from '../atoms/Logo'
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import Button from '../atoms/Button';

const inter = Inter({ subsets: ['latin'] });

const menuItems = [
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  { label: 'Lorem Ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <>
    <div className={`flex justify-center `}>
      <nav className={` fixed z-30 ${isScrolled?"w-[95%]":"w-full"} flex items-center justify-between xl:px-[6.5rem] py-3 px-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md rounded-full mx-auto mt-4 shadow-lg' 
          : ''
      }`}>
        <Logo scrolled={isScrolled} />
        {/* Desktop Menu */}
        <ul className='md:flex hidden gap-x-[3.2rem]'>
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute mt-2 bg-white rounded-lg shadow-lg w-48 z-10 overflow-hidden border border-gray-100"
                  >
                    <div className="py-2">
                      {item.options.map((option, i) => (
                        <p 
                          key={i} 
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 transition-colors"
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ul>
        
        <div className="hidden md:block">
          <Button 
            buttonText='Sign In' 
            buttonStyle={`text-[15px] bg-white lg:px-[2.625rem] py-[0.813rem] rounded-[5px] shadow-md text-black ${inter.className} font-bold hover:bg-gray-50 transition-colors`} 
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl text-[#1959AC] p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-20 bg-white/95 backdrop-blur-lg md:hidden pt-20"
          >
            <div className="p-6">
              <ul className='space-y-6'>
                {menuItems.map((item, index) => (
                  <div key={index} className={`${inter.className} border-b pb-4`}>
                    <div
                      className="cursor-pointer text-[#1959AC] text-xl font-medium flex items-center justify-between"
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
                          transition={{ duration: 0.3 }}
                          className="pl-4 mt-2 overflow-hidden"
                        >
                          <div className="space-y-3 border-l-2 border-gray-200 pl-4 py-2">
                            {item.options.map((option, i) => (
                              <p 
                                key={i} 
                                className="text-gray-600 hover:text-[#1959AC] cursor-pointer"
                              >
                                {option}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </ul>
              
              <div className="mt-8 px-4">
                <Button 
                  buttonText='Sign In' 
                  buttonStyle={`w-full text-center bg-[#1959AC] text-white py-4 rounded-lg text-lg font-bold ${inter.className}`} 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;