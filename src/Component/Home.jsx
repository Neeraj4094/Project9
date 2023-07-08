import React from "react";
import { Carousel } from "flowbite-react";
import './Home.css'
import Toggle from "./Toggle";
function Home() {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Webster</div>
          <Toggle></Toggle>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <button className="button">Contact Us</button>
        </div>
      </div>
      
    </>
  );
}

export default Home;
