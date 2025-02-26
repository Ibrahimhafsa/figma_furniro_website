import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mx-4 md:mx-[100px] py-[50px] border-b border-b-gray-400">
        <div className="col-span-2 flex flex-col gap-4 md:gap-10">
          <h1 className="font-poppins font-bold text-lg md:text-3xl text-black">Furniro.</h1>
          <div>
            <h1 className="text-sm md:text-[16px] font-normal text-[#9F9F9F] font-poppins">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
         
          <h1 className="font-poppins text-gray-900 font-bold text-1xl">
            Navbar
          </h1>
          <div className="text-sm md:text-[16px] font-medium font-poppins flex flex-col gap-2 text-gray-800 md:gap-8">
            <h1>
              <Link href="/home">Home</Link>
            </h1>
            <h1>
              <Link href="/shop">Shop</Link>
            </h1>
            <h1>
              <Link href="/blog">Blog</Link>
            </h1>
            <h1>
              <Link href="/contact">Contact</Link>
            </h1>
            <h1>
              <Link href="/checkout">Checkout</Link>
            </h1>
            <h1>
              <Link href="/cart">Cart</Link>
            </h1>

          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <h1 className="font-poppins text-gray-900 font-semibold text-sm md:text-[16px]">Help</h1>
          <div className="text-sm md:text-[16px] font-medium font-poppins flex flex-col gap-2 md:gap-8">
            <h1>Payment Options</h1>
            <h1>Returns</h1>
            <h1>Privacy Policies</h1>
          </div>
        </div>
        <div className="col-span-2 flex-col flex gap-4 md:gap-10">
          <h1 className="font-poppins text-gray-900 font-semibold text-sm md:text-[16px]">Newsletter</h1>
          <div className="flex gap-2 md:gap-4">
            <input className="underline"
            placeholder="Enter your Email Address"></input>
        </div>
    </div>
</div>
 <h1 className="py-4 md:py-8 font-serif px-4 md:px-[100px] font-normal text-1xl md:text-[16px]">
    2023 Furniro. All rights reserved. Coded by  <span className="font-bold text-xl">Hafsa Ibrahim</span>
 </h1>
<div/>
</div>
  )};

export default Footer

              