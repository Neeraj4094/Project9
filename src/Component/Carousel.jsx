import React from 'react'
import { Card } from 'flowbite-react'
import { Carousel } from 'flowbite-react'
import './Carousel.css'
import Img6 from '../Image/Img6.png'
import Img5 from '../Image/Img5.png'
import Img7 from '../Image/Img7.png'
function Carousel1() {
  return (
    <>
        {/* <Card
  imgAlt="Meaningful alt text for an image that is not purely decorative"
  imgSrc="/images/blog/image-1.jpg"
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Noteworthy technology acquisitions 2021
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </p>
</Card> */}
<div className="crousel 
h-96  text-slate-900  flex-row font-bold  ">
        <Carousel>
          <img
            alt="..."
            src={Img5}
          />
          <img
            alt="..."
            src={Img6}
          />
          <img
            alt="..."
            src={Img7}
          />
          <img
            alt="..."
            src={Img5}
          />
          <img
            alt="..."
            src={Img6}
          />
        </Carousel>
      </div>
    </>
  )
}

export default Carousel1