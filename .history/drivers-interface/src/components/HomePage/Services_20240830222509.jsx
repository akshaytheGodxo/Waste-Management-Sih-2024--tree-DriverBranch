import React from 'react';
import Image1 from '../../assets/AI_services.png'
import Image2 from '../../assets/collaboration.jpeg'
import Image3 from '../../assets/Customer_care.jpeg'
import Image4 from '../../assets/Our_products.webp'
import Image5 from '../../assets/Reward_points.webp'
import Image6 from '../../assets/plastic-waste.jpg'

const Services = () => {
    return (
        <section className="py-10" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={Image1} 
                            alt="wheat flour grinding" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">AI Powered</h3>
                            <p className="text-gray-700 text-base">
                            
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={Image2}
                            alt="Gram Flour" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Collaboration</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={Image3}
                            alt="Jowar Flour" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Customer Care</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={Image4}
                            alt="Chilli Pounding" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Our Products</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                        <div className="text-center text-white font-medium">Special product</div>
                        <img 
                            src={Image5}
                            alt="Flavoured Spaghetti" 
                            className="w-full h-64 object-cover rounded-t-lg" 
                        />
                        <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Reward Points</h3>
                            <p className="text-gray-700 text-base">
                                <span className="font-medium underline">Our speciality is</span> Lorem Ipsum Generator

Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={Image6}
                            alt="Rice Papad" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
