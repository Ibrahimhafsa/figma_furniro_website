import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { HiOutlineTrophy } from 'react-icons/hi2'
import { BsShieldCheck } from 'react-icons/bs'
import { LuHandHeart } from 'react-icons/lu'
import { MdSupportAgent } from 'react-icons/md'

const Checkout = () => {
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
         <span className="font-medium">
         <h1 className="font-mono font-semibold text-5xl text-black pb-80">Checkout</h1>
         <Link href="/"></Link>
          </span>
         <p className="font-light text-lg text-black flex gap-4"></p>
     </div>  
      </div>
      

      <div className='flex flex-row'>
      <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-10 bg-gray-50">
      {/* Billing Details Form */}
      <div className="w-[608px]  bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Billing details</h2>
        <form className="space-y-4">
          
          <div className="flex flex-row gap-2">
            <div>
              <label className="block text-sm font-medium text-black mb-1 ">First Name</label>
              <input
                type="text"
                className="w-[211px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Last Name</label>
              <input
                type="text"
                className="w-[211px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Company Name (Optional)</label>
            <input
              type="text"
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Country / Region</label>
            <select className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200">
            </select>
          </div>
            <div>
            <label className="block text-sm font-medium text-black mb-1">Street Address</label>
            <input
              type="text"
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 mb-2"
             />
            </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Town / City</label>
            <input
              type="text"
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
             />
          </div>
          <div className=" gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Province</label>
              <select className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200">
                <option value=""></option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Zip Code</label>
              <input
                type="text"
                className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Phone</label>
            <input
              type="tel"
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email Address</label>
            <input
              type="email"
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Additional Information</label>
            <textarea
              className="w-[440px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              placeholder="Additional notes about your order."
            ></textarea>
          </div>
          </form>
        </div>
        </div>
      {/* Order Summary */}
      <div className="hidden md:block w-[608px] bg-white px-16 rounded-lg shadow-md mt-6 lg:mt-0 lg:ml-6 h-[789px] pt-24">
        
        <div className="space-y-2">
      
          <h1 className='text-3xl text-black font-bold'>Order Summary</h1>
          <div className="flex justify-between text-gray-900 text-xl font-bold pt-2">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between  font-medium">
            <span className='text-gray-500'>Augur A20 x 1</span>
            <span className='text-black'>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between pt-1 font-medium">
            <span className='text-black'>SubTotal</span>
            <span className='text-black'>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-gray-900 font-bold  pt-2">
            <span>Total</span>
            <span className='text-[#B88E2F] text-2xl'>Rs. 250,000.00</span>
          </div>
        </div>
        <div className="mt-6 space-y-4 border-t pt-4">
          <div>
            <input type="radio" id="bank" name="payment" className="mr-2" />
            <label htmlFor="bank" className="text-1xl">
              Direct Bank Transfer
            </label>
            <p className="text-gray-400 ml-6 pt-2">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            </p>
          </div>
          <div className='pt-2'>
            <input type="radio" id="cash" name="payment" className="mr-2" />
            <label htmlFor="cash" className="text-1xl">Cash on Delivery</label>
          </div>
          </div>

        <p className='pt-3 text-gray-700'>Your personal data will be used to support your experience throughout his website, to manage access to your account and for other purposes described in our <span className='text-black font-bold'>Privacy Policy</span></p>
        <button className="w-full bg-blue-700 text-white font-medium py-2 rounded-lg mt-6 hover:bg-blue-900">
          Place Order
        </button>

      </div>
    </div>
</div>
              {/* warranty part */}
    <div className="bg-[#FAF3EA] py-4 justify-between">
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

export default Checkout
