import React from "react";
import Image from "next/image";
import BikeImage from "../../../../public/images/hero/FZBikes.png";
import Biker1 from "../../../../public/images/features/biker1.png"; 
import Biker2 from "../../../../public/images/features/handshake.png";
import Biker3 from "../../../../public/images/features/threeHand.png";
import HeaderContent from "../organism/HeaderContent";
import Button from "../atoms/Button";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";


const featuresList=[{
            img: Biker1,
            text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
          }, {
            img: Biker2,
            text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
          }, {
            img: Biker3,
            text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
          }]

const inter = Inter({ subsets: ["latin"] });

const Bikes = () => {
  return (
    <section className=" flex justify-end py-16 w-full">
        <div className="flex justify-center p-8 shadow-2xl w-[92%] h-[989px]">
            {/* left */}
            <div className="w-1/2 max-w-[620px] p-2 relative">
                <HeaderContent primaryContent="Lorem ipsum dolor sit" secondaryContent="Lorem ipsum dolor sit amet" descript="Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus."/>
            {/* Feature Items */}
            <div className="pt-14 max-w-[594px] space-y-6">
                {featuresList.map((item,index)=>(
                <div key={index} className="flex items-center gap-x-2.5">
                    <Image src={item.img} alt="imga" className="w-[146px] h-[146px]"/>
                    <p className="w-[315px] ">{item.text}</p>
                </div>
                ))}
            </div>
            {/* CTA */}
            <div className="flex gap-x-6 absolute bottom-0">
                <Button buttonText={`Loerum Ipsum`} buttonStyle={`${inter.className} bg-[#1959AC] rounded-[5px] text-[15px] text-white flex items-center gap-x-2 px-3.5 py-1.5`} rightIcon={<FaArrowRight/>}/>
                <Button buttonText={`123456789`} buttonStyle={`${inter.className} text-[#1959AC]  flex items-center gap-x-2 px-2 py-1`} leftIcon={<BsTelephone/>}/>
            </div>
            </div>
            {/* Right */}
            <Image src={BikeImage} alt="bikes" className="w-1/2"/>
        </div>

    </section>
  );
};

export default Bikes;
