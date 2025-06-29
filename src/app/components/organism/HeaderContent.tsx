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
    <div className="max-w-[593px]">
      <h2 className={`text-[#0546D2] font-semibold ${inter.className} lg:text-[24px]`}>
        {primaryContent}
      </h2>
      <h3 className={`${roboto_Condensed.className} ${contentwidth} text-[#222222] md:text-[42px] font-bold`}>
        {secondaryContent}
      </h3>
      <p>{descript}</p>
    </div>
  );
}

export default HeaderContent;
