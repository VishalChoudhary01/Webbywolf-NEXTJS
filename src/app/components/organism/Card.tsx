'use client'

import Image, { StaticImageData } from 'next/image'

type CardProps = {
  image: StaticImageData
}

function Card({ image }: CardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200">
      {/* Image */}
      <Image
        src={image}
        alt="Card Image"
        className="w-full h-[180px] object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
          Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. 
          Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. 
          Quam nibh rhoncus rhoncus enim venenatis bibendum.
        </p>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Card
