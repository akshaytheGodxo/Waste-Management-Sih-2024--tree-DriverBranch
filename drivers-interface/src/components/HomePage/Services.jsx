import React, {useEffect} from 'react';
import Image1 from '../../assets/AI_services.png'
import Image2 from '../../assets/collaboration.jpeg'
import Image3 from '../../assets/Customer_care.jpeg'
import Image4 from '../../assets/Our_products.webp'
import Image5 from '../../assets/Reward_points.webp'
import Image6 from '../../assets/plastic-waste.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <section className="py-10" id="services">
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-down">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-in">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
                        <img 
                            src={Image1} 
                            alt="wheat flour grinding" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">AI Powered</h3>
                            <p className="text-gray-700 text-base">
                            
                            Avrutti introduces an AI-powered website designed to aid in plastic segregation by scanning waste and categorizing it into different types. Additionally, our AI technology helps in accessing and identifying locations for effective waste management.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
                        <img 
                            src={Image2}
                            alt="Gram Flour" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Collaboration</h3>
                            <p className="text-gray-700 text-base">
                            To expand our reach and achieve greater success, we are excited to collaborate with various companies to promote recycling and sustainability. These partnerships will enhance our efforts in recycling products and creating a more eco-friendly future together.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
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
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
                        <img 
                            src={Image4}
                            alt="Chilli Pounding" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Our Products</h3>
                            <p className="text-gray-700 text-base">
                            As part of our commitment to sustainability, we are excited to introduce a new service: reward coins! You will earn reward points for every plastic waste submission, which can later be redeemed to purchase our recycled products.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
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
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-110"  >
                        <img 
                            src={Image6}
                            alt="Rice Papad" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Waste Collection</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <script>
  AOS.init();
</script>
        </section>
    );
};

export default Services;
