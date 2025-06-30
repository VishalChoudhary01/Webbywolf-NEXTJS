import React from 'react';
import Logo from '../atoms/Logo';
import { Roboto_Condensed } from 'next/font/google';
import { Inter } from 'next/font/google';
import Button from '../atoms/Button';
import { FaArrowRightLong } from "react-icons/fa6";

// Load fonts
const roboto_Condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const inter = Inter({ subsets: ['latin'] });

type HeaderBannerProps = {
  heading: string;
  paragraph1?: string;
  paragraph2?: string;
  showButton?: boolean;
  buttonText?: string;
  backgroundImageSet: string; 
};

function HeaderBanner({
  heading,
  paragraph1,
  paragraph2,
  showButton = false,
  buttonText = '',
  backgroundImageSet,
}: HeaderBannerProps) {
  return (
    <div
      className="w-full h-[652px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageSet})` }}
    >
      <div className="w-full h-full px-8 py-6">
        <Logo />
        <div className="w-full h-full text-center flex items-center justify-center">
          <div className="text-white flex flex-col items-center md:gap-y-5 gap-y-3 md:py-1 pt-3 ">
            <h1
              className={`${roboto_Condensed.className} md:max-w-[920px] md:text-[42px] text-[25px] leading-9 font-bold uppercase`}
            >
              {heading}
            </h1>

            {paragraph1 && (
              <p
                className={`max-w-[732px] font-semibold md:text-[18px] text-[15px] ${inter.className}`}
              >
                {paragraph1}
              </p>
            )}

            {paragraph2 && (
              <p className={`${inter.className} max-w-[732px] md:text-[18px] text-[15px]`}>
                {paragraph2}
              </p>
            )}

            {showButton && (
              <Button
                buttonText={buttonText}
                buttonStyle="bg-white px-3 py-1 flex items-center gap-x-1 text-black rounded"
                rightIcon={<FaArrowRightLong />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
