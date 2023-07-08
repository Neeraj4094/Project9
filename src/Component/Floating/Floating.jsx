import React from 'react'
import '../Floating/Floating.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Floating = ({image, txt1, txt2}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="floating" style={darkMode? {color:'black'}:{color:'black'}}>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
            </span>
    </div>
  )
}

export default Floating



