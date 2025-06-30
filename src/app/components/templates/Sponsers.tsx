import React from "react";
import HeaderBanner from "../organism/HeaderBanner";
import Bikerain from '../../../../public/images/banner/bikerain.png';
import HeaderContent from "../organism/HeaderContent";
import SponsersImages from "../organism/SponsersImages";
import Card from "../organism/Card";
import Budha from '../../../../public/images/cards/budha.png'
import arch from '../../../../public/images/cards/arch.png'
import girl from '../../../../public/images/cards/girl.png'
import orange from '../../../../public/images/cards/orange.png'

const Sponsers = () => {
  return (
    <section className="">
      <HeaderBanner
        heading="Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi."
        paragraph1="Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
"
        paragraph2="Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo."
        buttonText="Loerum Ipsum"
        showButton={true}
        backgroundImageSet={Bikerain.src}
      />
      <div className="px-4">
       <SponsersImages/>
      </div>
      <div className="md:px-16 px-3 space-y-5">
      <HeaderContent primaryContent="Lorem ipsum dolor sit amet" secondaryContent="LOREM IPSUM dolor sit" descript="Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus."/>
      <div className="w-full md:px-24 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Card image={Budha} />
        <Card image={arch} />
        <Card image={girl} />
        <Card image={orange} />
        
      </div>
      </div>
      
      </div>
    </section>
  );
};

export default Sponsers;
