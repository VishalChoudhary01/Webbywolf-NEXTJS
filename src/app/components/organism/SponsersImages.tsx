"use client";
import React from "react";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import Ather from "../../../../public/images/brands/AtherLogo 1.png";
import Bajaj from "../../../../public/images/brands/Bajaj.png";
import TORK from "../../../../public/images/brands/TORK.png";
import Hero from "../../../../public/images/brands/Hero.png";
import Honda from "../../../../public/images/brands/Honda.png";
import Ola from "../../../../public/images/brands/Ola-Electric 1.png";
import KTM from "../../../../public/images/brands/KTM-Logo.svg 1.png";
import TVS from "../../../../public/images/brands/TVS.png";
import Yamaha from "../../../../public/images/brands/yamaha.png";
import Ulta from "../../../../public/images/brands/Ultraviolette.png";
import royal from "../../../../public/images/brands/royal.png";
import revolt from "../../../../public/images/brands/revolt.png";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SponsersImages = () => {
  const brands = [
    { name: "Hero", image: Hero },
    { name: "Honda", image: Honda },
    { name: "Bajaj", image: Bajaj },
    { name: "TVS", image: TVS },
    { name: "Royal Enfield", image: royal },
    { name: "Yamaha", image: Yamaha },
    { name: "KTM", image: KTM },
    { name: "Ather", image: Ather },
    { name: "OLA ELECTRIC", image: Ola },
    { name: "Revolt", image: revolt },
    { name: "Ultraviolette", image: Ulta },
    { name: "TORK", image: TORK },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full py-10">
      {/* Headings */}
      <div className={`text-center mb-6 flex justify-center  ${roboto_Condensed.className}`}>
        <h2 className=" md:text-[42px] max-w-[665px] leading-9 text-[30px] font-bold text-black uppercase">
          Lorem Ipsum Dolor Sit Amet
          Consectetur. Commodo Leo Amet.
        </h2>
      </div>

      {/* Mobile: Infinite Scroll */}
      <div className="md:hidden overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-6 w-[100px] h-[60px] relative"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3x4 Grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-6 px-12 place-items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[100px] h-[60px] relative"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsersImages;
