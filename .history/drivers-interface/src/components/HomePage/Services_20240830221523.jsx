import React from 'react';
import Image1 from '../../assets/AI_services.png'
import Image2 from '../../assets/collaboration.jpeg'
import Image3 from '../../assets/Customer_care.jpeg'
import Image4 from '../../assets/Our_products.webp'
import Image5 from '../../assets/Reward_points.webp'

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
                            src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww" 
                            alt="Gram Flour" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp" 
                            alt="Jowar Flour" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Chilli Pounding" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli Pounding</h3>
                            <p className="text-gray-700 text-base">
Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet consectetur neque lacus blandit bibendum cras sociosqu. Phasellus tellus sagittis bibendum eget nullam. Euismod ut ultricies purus; netus sem curae. Nibh tellus nibh; praesent ac felis quisque. Tempus vitae litora ultricies etiam facilisi malesuada. Faucibus litora convallis convallis phasellus sapien ornare.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                        <div className="text-center text-white font-medium">Special product</div>
                        <img 
                            src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww" 
                            alt="Flavoured Spaghetti" 
                            className="w-full h-64 object-cover rounded-t-lg" 
                        />
                        <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
                            <p className="text-gray-700 text-base">
                                <span className="font-medium underline">Our speciality is</span> Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include: Mango, spinach.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=" 
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
