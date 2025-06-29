import React from "react";
import Image from "next/image";
import hero from "./../../../../public/images/hero/Hero.png";
import { Roboto_Condensed } from "next/font/google";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import bluetick from "./../../../../public/icons/bluetick.svg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

// Importing Roboto Condensed font with specific weights and subsets
const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="w-full flex flex-col pb-24 ">
      <div className="w-full flex items-center ">
        {/* left */}
        <div className="w-[60%]   flex justify-center items-center pt-24 ">
          <div className="md:w-[696px] space-y-9">
            <h1
              className={`${roboto_Condensed.className} max-w-[528px] h-[140px] leading-16 font-bold xl:text-[64px] `}
            >
              Lorem ipsum dolor sit amet
            </h1>
            <p className={`max-w-[520px]`}>
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.{" "}
            </p>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2 ">
                <Input InputStyle="outline-none border border-[#C3C3C3] max-w-[342px] max-h-[46px] xl:w-[342px] xl:h-[46px] rounded-[6px] p-2 caret-gray-500 " />
                <Button
                  buttonText="Submit"
                  buttonStyle={`flex items-center gap-x-2 rounded-[5px] text-[15px] max-w-[127px] md:w-[127px] justify-center h-[47px] bg-[#1959AC] text-white  ${inter.className}`}
                  rightStyle="text-[15px]"
                  rightIcon={<FaArrowRight />}
                />
              </div>
              <div
                className={`flex items-center gap-x-3 ${inter.className} text-[15px]`}
              >
                <Image
                  src={bluetick}
                  alt="checked"
                  className="w-[30px] h-[30px]"
                />
                <p>No credit card required!</p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[40%] h-auto md:block hidden clip-diagonal ">
          <Image src={hero} alt="hero" className="object-fill" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-white to-transparent mb "></div>
    </section>
  );
};

export default Hero;
