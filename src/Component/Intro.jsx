import React from 'react'
import './Intro.css'
import Img6 from  '../Image/Img6.png'
import Img5 from  '../Image/Img5.png'
import Img7 from  '../Image/Img7.png'
import Floating from './Floating/Floating'
// import motion from 'frame-motion'

function Intro() {
  // const transition = {duration :2, type:'spring'}
  return (
    <div className="Intro">
      
      <div className="i-left">
        <div className="i-name">
          <span>Hey! This Is</span>
          <span>Webster</span>
          <span>Best Developer for creating Website and Web Pages</span>
          {/* <span>Frontend Developer with high level of experience and development, producing the quality work</span> */}
        </div>
        <button className='button i-button'>
          Book Now
        </button>
        <div className="i-icons">
          <a ><i class='bx bxl-facebook-circle'></i></a>
          <a ><i class='bx bxl-twitter'></i></a>
          <a ><i class='bx bxl-instagram' ></i></a>
          <a ><i class='bx bxl-linkedin' ></i></a>
        </div>
      </div>

      <div className="i-right">
          <img src={Img7} alt="" /> 
           {/* <img src={Img4} alt="" />
          <img src={Img3} alt="" /> 
          <img src={Img4} alt="" />  */}
         <div  style={{top: '255%', left:'68%', borderRadius:'2%'}}>
          <Floating image={Img5} txt1='Hotel' txt2='Booking'></Floating>
        </div> 
        <div style={{top: '129rem', left:'-2rem'}}>
          <Floating image={Img6} txt1='Best Design' txt2='Award' />
        </div>
      </div>
    </div>
  )
}

export default Intro