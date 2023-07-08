import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home'

import Intro from './Component/Intro'

import Carousel1 from './Component/Carousel'
import Services from './Component/Services'
import Experience from './Component/Expert/Experience'
import Work from './Component/Work'
import Portfolio from './Component/Portfolio'
import Testimonials from './Component/Testimonials'
import Contact from './Component/Contact'
import Foot from './Component/Footer'
import { themeContext } from './Context'
import { useContext } from 'react'
// import Crumb from './Component/Crumb'
// import Navbar from './Component/Navbar'
// import Cards from './Component/Cards'
// import Review from './Component/Review'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [count, setCount] = useState(0)

  return (
    <>
{/* <BrowserRouter>
      <Routes>
         <Route path="/Home" element={<Cards />} /> 
        <Route path='/login' element={<Crumb></Crumb>} /> 
      </Routes>
</BrowserRouter> */}
    {/* <Navbar></Navbar> */}
    {/* <Review></Review> */}
    {/* <Carousel1></Carousel1> */}
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    >
    <Home></Home>
      <div className="bg">
    <Intro></Intro>
    </div>
    <Experience></Experience>
    <div className="bg1">
    <Services></Services>
    </div>
    <Carousel1></Carousel1>
    <Testimonials></Testimonials>
    <div className="bg">
    <Work></Work>
    </div>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Foot></Foot>
    </div>

    </>
  )
}

export default App
