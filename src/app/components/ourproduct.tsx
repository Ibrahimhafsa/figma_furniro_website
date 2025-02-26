import React from "react";
import Image from "next/image"; 

const OurProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl text-[#333333] font-bold text-center mb-15 ">Our Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        
        {/* Product 1 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product1.jpg"
            alt="Product 1 - Syltherine Stylish Cafe Chair"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
            priority 
          />
          <h3 className="text-2xl mx-14 font-semibold mt-3">Syltherine</h3>
          <p className="text-gray-600 mx-12">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-14">Rp 2.500.000</p>
        </div>

        {/* Product 2 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product2.jpg"
            alt="Product 2 - Leviosa Stylish Cafe Chair"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Leviosa</h3>
          <p className="text-gray-600 mx-14">Stylish cafe chair</p>
          <p className="text-lg font-bold text-gray-800 mx-16">Rp 2.500.000</p>
        </div>

        {/* Product 3 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product3.jpg"
            alt="Product 3 - Lolito Luxury Big Sofa"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Lolito</h3>
          <p className="text-gray-600 mx-16">Luxury big sofa</p>
          <p className="text-lg font-bold text-gray-800 mx-16">Rp 7.000.000</p>
        </div>

        {/* Product 4 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product4.jpg"
            alt="Product 4 - Respira Outdoor Bar Table and Stool"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Respira</h3>
          <p className="text-gray-600 mx-6">Outdoor Bar Table and Stool</p>
          <p className="text-lg font-bold text-gray-800 mx-16">Rp 7.000.000</p>
        </div>

        {/* Product 5 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product5.jpg"
            alt="Product 5 - Grifo Night Lamp"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Grifo</h3>
          <p className="text-gray-600 mx-16">Night Lamp</p>
          <p className="text-lg font-bold text-gray-800 mx-14">Rp 1.500.000</p>
        </div>

        {/* Product 6 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product6.jpg"
            alt="Product 6 - Muggo Small Mug"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-16">Muggo</h3>
          <p className="text-gray-600 mx-16">Small Mug</p>
          <p className="text-lg font-bold text-gray-800 mx-14">Rp 150.000</p>
        </div>

        {/* Product 7 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product7.jpg"
            alt="Product 7 - Pingky Cute Bed Set"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Pingky</h3>
          <p className="text-gray-600 mx-16">Cute Bed Set</p>
          <p className="text-lg font-bold text-gray-800 mx-14">Rp 7.000.000</p>
        </div>

        {/* Product 8 */}
        <div className="rounded-lg p-4">
          <Image
            src="/images/product8.jpg"
            alt="Product 8 - Potty Industrial-style Flower Pot"
            width={245}
            height={350}
            className="w-[245px] h-[350px] object-cover"
          />
          <h3 className="text-2xl font-semibold mt-3 mx-20">Potty</h3>
          <p className="text-gray-600 mx-7">Industrial-style flower pot</p>
          <p className="text-lg font-bold text-gray-800 mx-16">Rp 500.000</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6 w-full">
        <button className="px-4 md:px-6 transition border border-yellow-600 text-yellow-600 py-2 rounded-md hover:bg-yellow-600 hover:text-white">
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
