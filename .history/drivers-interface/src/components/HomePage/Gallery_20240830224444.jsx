import React from 'react';
import Image1 from '../../assets/Mumbai.jpg'
import Image2 from '../../assets/Lucknow.jpg'
import Image3 from '../../assets/Hydrabad.jpg'
import Image4 from '../../assets/Delhi.jpeg'


const Gallery = () => {
  return (
    <section className="text-gray-700 body-font" id="gallery">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
Our Service Location
      </div>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* Repeat this div for each image */}
        <div className="group relative">
          <img
            src={Image1}
            alt="Image 1"
            className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src={Image2}
            alt="Image 2"
            className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src={Image3}
            alt="Image 3"
            className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src={Image4}
            alt="Image 4"
            className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
