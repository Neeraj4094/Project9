import './Toggle.css'
import React, { useContext } from 'react'
import { themeContext } from '../Context'

const Toggle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({type: 'toggle'})
  }
  return (
    
    <div className="toggle" onClick={handleClick}>
        <box-icon name='moon' />
        <box-icon name='sun' className='toogg' style={{color:'orange'}} />
        <div className="t-button" 
        
        style={darkMode? {left:'2px'}:{right:'2px'}}
        >
            
        </div>
    </div>
    
  )
}

export default Toggle