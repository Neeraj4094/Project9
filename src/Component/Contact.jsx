import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { themeContext } from '../Context'
import { useRef } from 'react';
const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const form = useRef();
  const [done, setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_93c35tn', 'template_v9h14ed', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
        <div className="w-left">
            <div className="awesome">
                <span style={darkMode? {color:'white'}:{color:'black'}}>Get in touch</span>
                <span>Conact Me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name='user_name'
              className="user"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              name='user_name'
              className="user"
              placeholder="Enter your email"
            />
            <textarea name="msg" className='user' placeholder='Your Message'></textarea>
            <input type="submit"  value="Send" className='button' />
            <span>{done && "Thanks for Contacting me"}</span>
            {/* <div className="blur s-blur1" style={{background:"Purple"}}></div> */}
            </form>
        </div>
    </div>
  )
}

export default Contact