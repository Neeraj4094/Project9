import React from 'react'
import './Services.css'
import Cards from './Cards/Cards'
import Img6 from '../Image/Img6.png'
import Img7 from '../Image/Img7.png'
const Services = () => {
  return (
    <div className="services">
      <div className="i-name1">
        <div className="awesome">
            <span style={{color:'white'}}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Eos laboriosam sint ratione accusantium molestias quidem, magni
                eveniet exercitationem alias tempore eligendi, ea animi <br /> adipisci similique,
            </span>
        </div>
                <button className="button s-button">Hotel Schedule</button>
      </div>
      {/* <div className="i-right1"></div> */}
        <div className="Card">
          <div 
          // style={{top: '15%', left:'68%'}}
          >
            <Cards emoji={Img6}
            heading='Design of Rooms'
            detail="What are you waiting for come and look at this" 
            />
          </div>
          <div className="card2">
          <div>
            <Cards emoji={Img7}
            heading='Design of Hotels'
            detail="What are you waiting for come and look at this" 
            />
          </div>
          </div>
          <div className="card3">
          <div>
            <Cards emoji={Img6}
            heading='Design of Hotels'
            detail="What are you waiting for come and look at this" 
            />
          </div>
          </div>
            </div>
            
    </div>
  )
}

export default Services