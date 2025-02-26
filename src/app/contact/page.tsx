import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";
import { LuHandHeart } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="">
              <Image
            src="/images/contactpic.jpg"
            alt="banner"
            width={1920} 
            height={328}
            className="w-full h-[328px] relative flex justify-center items-center blur-sm"
        />
        
        
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50 ">
          <span className="font-medium">
          <h1 className="font-mono font-semibold text-black text-3xl md:text-5xl md:pb-80 pb-100">Contact</h1>
          <Link href="/"></Link>
           </span>
          <p className="font-light text-lg text-black flex gap-4"></p>
      </div>  

      <section className=" flex flex-row">

      <div className="pt-12 ml-24">
          <h1 className="text-4xl font-bold text-black">Get in touch with us</h1>
          <p className="text-gray-500 pt-7">for more Information about our product & services, Please feel free to drop us <br /> an Email or give us a call.
          Our staff Always be there to help you out. <br /> Do not Hesitate!
          </p>

          <h1 className="text-2xl flex flex-row pt-14 font-semibold"><IoLocationSharp className="mr-6"/> Address</h1>
          <p className="pt-3 mx-11">236 5th SE Avenue, New York NY10000, United States.</p>

          <h1 className="text-2xl flex flex-row pt-14 font-semibold"><FaPhoneAlt className="size-6 mr-6"/>   Phone</h1>
          <p className="pt-3 mx-11">Mobile:(+84) 546-6789</p>
          <p className="pt-1 mx-11">Hotline: (+84) 456-6789</p>

          <h1 className="text-2xl flex flex-row pt-14 font-semibold"><MdWatchLater className="mr-6"/>Working Time</h1>
          <p className="pt-3 mx-11">Monday-Friday: 9:00 - 22:00</p>
          <p className="pt-1 mx-11">Saturday-Sunday: 9:00 - 21:00</p>

        </div>

  
  <div className="w-[635px] container px-5 py-24 mx-auto flex">
    <div className="  bg-white rounded-lg p-8  flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <div className="relative mb-4">
        
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Your Name
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Abc"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Abc@def.com"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Subject
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="This is an Optional"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Hi, I'd like to ask about"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#B88E2F] border-0 py-2 px-6 focus:outline-none  rounded text-lg">
        Submit
      </button>
      </div>
    </div>
</section>


      </div>

      {/* warranty part */}

      <div className="bg-[#FAF3EA] py-4 justify-between">
      <div className="w-full h-[250px] container mx-auto flex justify-between items-center space-x-4 px:4 md:px-6">
        
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
};
export default Contact