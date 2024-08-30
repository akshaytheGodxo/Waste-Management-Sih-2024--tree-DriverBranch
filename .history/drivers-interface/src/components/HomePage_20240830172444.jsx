import React from 'react'
import NavBar from './HomePage/NavBar'
import Hero from './HomePage/Hero'
import Services from './HomePage/Services'
import AboutUs from './HomePage/AboutUs'
import Gallery from './HomePage/Gallery'
import ContactUs from './HomePage/ContactUs'
import Footer from './HomePage/Footer'
const HomePage = () => {
    return (
    <div>
        <NavBar /> 
        <Hero/>
        <Services/>
        <AboutUs/>
        <Gallery/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default HomePage
