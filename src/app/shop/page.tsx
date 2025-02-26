import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { IoFilter } from 'react-icons/io5'
import { BiGridSmall } from 'react-icons/bi'
import { AiOutlineBoxPlot } from 'react-icons/ai'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { BsShieldCheck } from 'react-icons/bs'
import { LuHandHeart } from 'react-icons/lu'
import { MdSupportAgent } from 'react-icons/md'

const Shop = () => {
  return (
    <div>
    <div>
        <div>
      <Image
              src="/images/contactpic.jpg"
              alt="banner"
              width={1920} 
              height={328}
              className="w-full h-[328px] relative flex justify-center items-center blur-sm"
            />
       
       <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
         
         <h1 className="font-mono font-semibold  text-black text-3xl md:text-5xl md:pb-80 pb-100 ">Shop</h1>
         <Link href="/"></Link>
          
         <p className="font-light text-lg text-black flex gap-4"></p></div>  
      </div>


     {/* Showing result line*/}
    <div className="flex flex-wrap items-center  justify-between bg-[#f9f3eb] p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-5">
      <IoFilter className=' ml-4 md:ml-14' />
        <span className="text-md text-gray-900 ml-0">Filter </span>
        <BiGridSmall className='size-6' />
        <AiOutlineBoxPlot className='size-5'/>
        <span className='ml-1 hidden md:inline'>|</span>
        <span className="text-sm text-gray-800">Showing 1-50 of 250 results</span>
      </div>
      <div className=" items-center gap-3 hidden md:block">
        <span className='mr-2 text-md'>Show</span>
        <button className=" mr-20 px-3 py-1.5 border rounded-md shadow-sm text-md bg-white hover:bg-gray-100">
          16
        </button>
        <span className='text-md mr-2'>Short by</span>
        <button className="mr-20 px-3 py-1.5 border rounded-md shadow-sm text-sm bg-white hover:bg-gray-100">
          <option>Default</option>
        </button>
      </div>
    </div>

   {/* pictures in raw*/}
  <div className="bg-white mt-0">
        <div className="grid md:grid-cols-4 sm:grid-cols-2  px-14 py-2 items-center scale-90 gap-10 max-sm:scale-100 max-sm:py-14 max-sm:px-7">
          {/*Raw 1*/}
          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product1.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Syltherine</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product2.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Leviosa</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product3.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Lolito</h3>
          <p className="text-gray-600 mx-3 ">Luxury Big sofa</p>
          <p className="text-lg font-bold mx-3">Rp 7.000.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product4.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Respira</h3>
          <p className="text-gray-600 text-sm mx-3 ">Outdoor Table and Stool</p>
          <p className="text-lg font-bold mx-3">Rp 500.000</p>
          </div>
          
          {/* Raw 2*/}
          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product1.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Syltherine</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product2.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Leviosa</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product3.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Lolito</h3>
          <p className="text-gray-600 mx-3 ">Luxury Big sofa</p>
          <p className="text-lg font-bold mx-3">Rp 7.000.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product4.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Respira</h3>
          <p className="text-gray-600 text-sm mx-3 ">Outdoor Table and Stool</p>
          <p className="text-lg font-bold mx-3">Rp 500.000</p>
          </div>

          {/* Raw 3*/}
          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product1.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Syltherine</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product2.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Leviosa</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product3.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Lolito</h3>
          <p className="text-gray-600 mx-3 ">Luxury Big sofa</p>
          <p className="text-lg font-bold mx-3">Rp 7.000.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product4.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Respira</h3>
          <p className="text-gray-600 text-sm mx-3 ">Outdoor Table and Stool</p>
          <p className="text-lg font-bold mx-3">Rp 500.000</p>
          </div>

           {/* Raw 4*/}
           <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
           <Image 
          src="/images/product1.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Syltherine</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product2.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Leviosa</h3>
          <p className="text-gray-600 mx-3 ">Stylish cafe chair</p>
          <p className="text-lg font-bold mx-3">Rp 2.500.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product3.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Lolito</h3>
          <p className="text-gray-600 mx-3 ">Luxury Big sofa</p>
          <p className="text-lg font-bold mx-3">Rp 7.000.000</p>
          </div>

          <div className='w-[190px] h-[320px] bg-[#F4F5F7]'>
          <Image 
          src="/images/product4.jpg"
          alt="Services"
          width={190} 
          height={220}
          className="w-[190px] h-[220px]"/>
          <h3 className="text-2xl mx-3 font-semibold mt-3">Respira</h3>
          <p className="text-gray-600 text-sm mx-3 ">Outdoor Table and Stool</p>
          <p className="text-lg font-bold mx-3">Rp 500.000</p>
          </div>

        </div>
      </div>
    </div>
  {/* Next buttons */}
    <div className="flex space-x-2 items-center justify-center pb-10 mt-0">
   
      <button className="px-4 py-2 bg-[#B88E2F] text-white rounded-md">1</button>

      <button className="px-4 py-2 bg-[#FDF6EF] text-gray-800 rounded-md">2</button>

      <button className="px-4 py-2 bg-[#FDF6EF] text-gray-800 rounded-md">3</button>

      <button className="px-4 py-2 bg-[#FDF6EF] text-gray-800 rounded-md">Next</button>
    </div>

   {/* Warranty part */}
  <div className="bg-[#FAF3EA] py-4 justify-between w-full">
          <div className="w-full h-[250px] container mx-auto flex flex-wrap justify-between items-center space-x-4 px:4 md:px-6">
            
            <div className="flex items-center space-x-2">
              <HiOutlineTrophy className=" size-12 text-gray-700" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">High Quality</h3>
                <p className="text-md text-gray-500">crafted from top materials</p>
              </div>
            </div>
    
            <div className="flex items-center space-x-2">
              <BsShieldCheck className=" size-12 text-gray-700" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Warranty Protection</h3>
                <p className="text-md text-gray-500">Over 2 Years</p>
              </div>
            </div>
    
            <div className="flex items-center space-x-2">
              <LuHandHeart className="size-12 text-gray-700" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-md text-gray-500">Order over $150</p>
              </div>
            </div>
    
            <div className="flex items-center space-x-2">
              <MdSupportAgent className="size-12 text-gray-700" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">24 / 7 Support</h3>
                <p className="text-md text-gray-500">Dedicated Support</p>
              </div>
            </div>
            </div>
   
</div>
    </div>
  )
}

export default Shop
