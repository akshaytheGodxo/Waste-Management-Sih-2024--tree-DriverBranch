import React from 'react'
import image1 from '../../assets/HeroImg.png'
const Hero = () => {
  return (
    <div className="relative w-full h-[320px]" id="home">
    <div className="absolute inset-0 opacity-70">
        <img src={image1} alt="Background Image" className="object-cover object-center w-full h-full" />

    </div>
    <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-2 text-white">Avrutti</h1>
            <p className="font-bold text-xl mb-8 mt-4 text-white">One stop solution for Waste Management Services</p>
            <a href="#contactUs"
                className="px-6 py-3 bg-[#4A9960] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
                Us </a>
        </div>
    </div>
</div>

  )
}

export default Hero
