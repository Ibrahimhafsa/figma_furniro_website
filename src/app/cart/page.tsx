'use client'
import React from 'react'
import Link from 'next/link'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { BsShieldCheck } from 'react-icons/bs'
import { LuHandHeart } from 'react-icons/lu'
import { MdSupportAgent } from 'react-icons/md'


const Cart = () => {
  return (
    <div>
    <div>

    
    <div>
      <div>
      <img
         src="/images/contactpic.jpg"
         alt="banner"
         className="w-full h-[328px] relative flex justify-center items-center blur-sm"
       />
       
       <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
         
         <h1 className="font-mono font-semibold text-black text-3xl md:text-5xl md:pb-80 pb-100 ">Cart</h1>
         <Link href="/"></Link>
          
         <p className="font-light text-lg text-black flex gap-4"></p>
     </div>  
      </div>
 
      <div className="">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl gap-6 w-full h-[420px]">
        {/* Cart Items Section */}
        <div className="w-[817px] h-[5px] justify-between pt-11 mx-14 ">
          <div className="flex h-[55px] bg-[#F9F1E7] border-b pb-2  text-black">
            <h2 className="font-semibold pl-8 text-lg pt-3">Product</h2>
            <h2 className="font-semibold pl-48 text-lg pt-3">Price</h2>
            <h2 className="font-semibold pl-36 text-lg pt-3">Quantity</h2>
            <h2 className="font-semibold pl-32 text-lg pt-3">Subtotal</h2>
          </div>
          <div className="flex items-center py-4 border-b">
            
            <span className=' pl-4 font-medium flex flex-row'>Appezz Coffee Table</span>
            <span className=" text-right mx-24">Rs. 250,000.00</span>
            <input
              type="number"
              value={1}
              onChange={()=>{}}
              className="w-16 text-center border rounded-lg"
            />
            <span className=" mx-16 pl-11 flex flex-row text-right">Rs. 250,000.00</span>
            </div>
              </div>


              <div className=" lg:w-96 justify-end pt-12 h-[393px] w-[393px] hidden md:block">
          <div className="w-80 bg-[#F9F1E7]  shadow-md p-3">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-8 pt-4">Cart Totals</h2>
              <div className="flex justify-between mb-4 pb-4 text-1xl">
             <span className="text-black font-semibold  ">Subtotal:</span>
             <span className="text-black font-semibold ">₹ 290,000.00</span>
              </div>
          <div className="flex justify-between text-1xl mt-1">
              <span className="text-black font-semibold pb-3">Total:</span>
              <span className="text-[#B88E2F] font-semibold text-lg">₹ 290,000.00</span>
              </div>

          

            <Link href="/checkout">
            <button className="block text-center mt-10 w-full border-y-2 text-white bg-black py-4  rounded-lg font-medium">
            Checkout
            </button>
            </Link>




          </div>
          </div>
        </div>
    </div>
 </div>
</div>

      {/* warranty part */}
  <div className=" bg-[#FAF3EA] py-4 justify-between">
       <div className="w-full h-[250px] container mx-auto flex justify-between items-center space-x-4 px:4 md:px-6 flex-wrap space-y-4 md:space-y-0">
         
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

export default Cart
