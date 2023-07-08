import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Img5 from  '../Image/Img5.png'
import Img6 from  '../Image/Img6.png'
import Img1 from  '../Image/Img1.png'
import Img7 from  '../Image/Img7.png'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../Context'
const Portfolio = () => {
    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio">
        <span style={darkMode? {color:'white'}:{color:'black'}}>Recent Project</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        grabCursor={true}
        className='portfolio-slider' >
            <SwiperSlide>
                <img src={Img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img7} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio