import React from 'react'
import './Experience.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
    <div className="Expert 
     text-slate-900 border-2 flex-row font-bold" style={darkMode? {color:'white'}:{color:'black'}}>
      Much More About Us...</div>
    <div className="experience">
        <div className="achievement">
            <div className="circle" style={darkMode? {color:'black'}:{color:'black'}}>9+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={darkMode? {color:'black'}:{color:'black'}}>100+</div>
            <span>Completed</span>
            <span>Rooms</span>
        </div>
        <div className="achievement">
            <div className="circle" style={darkMode? {color:'black'}:{color:'black'}}>5+</div>
            <span>Hotels</span>
            <span>& Branches</span>
        </div>
    </div>
    </>
  )
}

export default Experience