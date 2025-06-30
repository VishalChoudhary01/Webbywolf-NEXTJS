import React from 'react';
import { Inter } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define prop types using a plain interface
interface HeaderContentProps {
  contentwidth?: string;
  primaryContent: string;
  secondaryContent: string;
  descript?: string;
}

// Component without React.FC
function HeaderContent({
  contentwidth = '',
  primaryContent,
  secondaryContent,
  descript = '',
}: HeaderContentProps) {
  return (
    <div className="max-w-[593px] md:w-[480px] space-y-3 md:text-justify text-center">
      <h2 className={`text-[#0546D2]  font-semibold ${inter.className} lg:text-[24px] md:text-[20px] text-[18px]`}>
        {primaryContent}
      </h2>
      <h3 className={`${roboto_Condensed.className} md:text-justify text-center ${contentwidth} text-[#222222] uppercase md:text-[42px] text-[30px] md:leading-11 leading-8 font-bold`}>
        {secondaryContent}
      </h3>
      <p className='md:text-[15px] text-[14px]'>{descript}</p>
    </div>
  );
}

export default HeaderContent;
