import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Img6 from  '../Image/Img6.png'
import Img5 from  '../Image/Img5.png'
import Img7 from  '../Image/Img7.png'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonials = () => {
  const clients=[
    {
      img: Img5, review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsa ab aliquam eum a harum vel nihil consectetur accusamus voluptatem facilis doloremque ratione sequi earum quo natus ducimus nulla eveniet libero expedita corporis inventore?",
    },
    {
      img: Img6, review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsa ab aliquam eum a harum vel nihil consectetur accusamus voluptatem facilis doloremque ratione sequi earum quo natus ducimus nulla eveniet libero expedita corporis inventore?",
    },
    {
      img: Img5, review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsa ab aliquam eum a harum vel nihil consectetur accusamus voluptatem facilis doloremque ratione sequi earum quo natus ducimus nulla eveniet libero expedita corporis inventore?",
    },
    {
      img: Img7, review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsa ab aliquam eum a harum vel nihil consectetur accusamus voluptatem facilis doloremque ratione sequi earum quo natus ducimus nulla eveniet libero expedita corporis inventore?",
    }
    

  ]
  return (

    <div className="t-wrapper">
      <div className="wrap">
      <div className="t-heading">
        <span>What our </span>
        <span>Customer tells </span>
        <span>about us...</span> 
      </div>
      <Swiper 
      modules={[Pagination]}
      slidePrevClass={1}
      pagination={{clickable: true}}
      
      >
        {clients.map((client, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials