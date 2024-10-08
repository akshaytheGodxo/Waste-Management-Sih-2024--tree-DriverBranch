import React from 'react'
import NavBar from './HomePage/NavBar'
import Hero from './HomePage/Hero'
import Services from './HomePage/Services'
import AboutUs from './HomePage/AboutUs'
import Gallery from './HomePage/Gallery'
const HomePage = () => {
    return (
    <div>
        <NavBar /> 
        <Hero/>
        <Services/>
        <AboutUs/>
        <Gallery/>
    </div>
  )
}

export default HomePage
