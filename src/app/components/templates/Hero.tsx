"use client"
import React from "react";
import Image from "next/image";
import hero from "./../../../../public/images/hero/Hero.png";
import { Roboto_Condensed } from "next/font/google";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import bluetick from "./../../../../public/icons/bluetick.svg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import { motion } from "motion/react";

// Importing Roboto Condensed font with specific weights and subsets
const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:pb-24 pb-14 ">
      <div className="w-full flex items-center ">
        {/* left */}
        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5}} 
        className="md:w-[60%] w-full   flex justify-center items-center md:pt-24 pt-20  md:px-0 px-2.5">
          <div className="md:w-[696px] md:space-y-9 space-y-8">
            <h1
              className={`${roboto_Condensed.className} max-w-[528px] md:h-[140px] md:leading-16 leading-11 md:text-justify text-center font-bold xl:text-[64px] lg:text-[62px] md:text-[55px]  text-[40px]`}
            >
              Lorem ipsum dolor sit amet
            </h1>
            <p className={`max-w-[520px] md:text-justify text-center`}>
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.{" "}
            </p>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2 md:justify-start justify-center  ">
                <Input InputStyle="outline-none border border-[#C3C3C3] max-w-[342px] max-h-[46px] xl:w-[342px] xl:h-[46px] rounded-[6px] p-2 caret-gray-500 " />
                <Button
                  buttonText="Submit"
                  buttonStyle={`flex items-center gap-x-2 rounded-[5px] text-[15px] max-w-[127px] md:w-[127px] md:px-0 px-4 justify-center h-[42px] bg-[#1959AC] text-white  ${inter.className}`}
                  rightStyle="text-[15px]"
                  rightIcon={<FaArrowRight />}
                />
              </div>
              <motion.div
              initial={{y:180,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.5}}
                className={`flex items-center md:justify-start justify-center gap-x-3 ${inter.className} text-[15px]`}
              >
                <Image
                  src={bluetick}
                  alt="checked"
                  className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                />
                <p>No credit card required!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <motion.div 
        initial={{x:120,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5}}
        className="w-[40%] h-auto md:block hidden clip-diagonal ">
          <Image src={hero} alt="hero" className="object-fill" />
        </motion.div>
        
      </div>
      <div className="absolute bottom-0 w-full h-[60px] md:block hidden bg-gradient-to-t from-white to-transparent  "></div>
    </section>
  );
};

export default Hero;
