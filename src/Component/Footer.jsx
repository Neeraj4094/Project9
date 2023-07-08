import React from 'react'
import './Footer.css'
import Img6 from '../Image/Img6.png'
const Foot = () => {
  return (
    <div className="footer">
        {/* <img src={Img6} alt="" style={{width:'100%'}}/> */}
        <div className="f-content">
            <span>4094_20neeraj@gc11.ac.in</span>
            <div className="icons" style={{color:'White'}}>
                <a ><i class='bx bxl-facebook-circle'></i></a>
                <a ><i class='bx bxl-twitter'></i></a>
                <a ><i class='bx bxl-instagram' ></i></a>
                <a ><i class='bx bxl-linkedin' ></i></a>
            </div>
        </div>
    </div>
  )
}

export default Foot