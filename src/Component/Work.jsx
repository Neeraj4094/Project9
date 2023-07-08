import React from 'react'
import './Work.css'
import Img1 from  '../Image/Img1.png'
import Img2 from  '../Image/Img2.png'
import Img3 from  '../Image/Img3.png'
import Img4 from  '../Image/Img4.png'
import Img5 from  '../Image/Img5.png'
import { useContext } from 'react'
import { themeContext } from '../Context'
const Work = () => {
    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="work">
        <div className="i-name1">
        <div className="awesome ">
            <span style={darkMode? {color:'white'}:{color:'white'}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Eos laboriosam sint ratione accusantium molestias quidem, magni
                eveniet exercitationem alias tempore eligendi, ea animi <br /> adipisci similique,
            </span>
        </div>
                <button className="button s-button">Hotel Schedule</button>
      </div>
      <div className="w-right">
        <div className="w-circle">
            <div className="w-secCircle">
                <img src={Img1} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Img2} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Img3} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Img4} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Img5} alt="" />
            </div>
        </div>
        <div className="backcircle bc"></div>
        <div className="backcircle yc"></div>
      </div>
    </div>

  )
}

export default Work