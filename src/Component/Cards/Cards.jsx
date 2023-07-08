import React from 'react'
import './Cards.css'
const Cards = ({emoji,heading,detail}) => {
  return (
    <>
    
    <div className="Cards">
        <img src={emoji} alt="" />
        <span>{heading} </span>
        
       <span> {detail}</span>
        <button className="i-button">Learn More</button>
    </div>
    
    </>
  )
}

export default Cards