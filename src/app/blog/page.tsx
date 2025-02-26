import React from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { MdSupportAgent } from 'react-icons/md';
import { LuHandHeart } from 'react-icons/lu';
import { BsShieldCheck } from 'react-icons/bs';
import { HiOutlineTrophy } from 'react-icons/hi2';
import Image from 'next/image';

const Blog = () => {
  return (
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
         
         <h1 className="font-mono font-semibold text-black text-3xl md:text-5xl md:pb-80 pb-100 ">Blog</h1>
         <Link href="/"></Link>
          
         <p className="font-light text-lg text-black flex gap-4"></p></div>  
      </div>



{/* Catagories Section */}
      <div className=' '>
      <aside className="hidden md:block w-[327px] absolute right-0 h-[500px] pt-24  bg-white mr-32">
      <div className="  relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
           /> <FaSearch className='absolute mx-64 top-2 text-gray-600 size-6'/>
      </div>
      <h2 className="text-2xl font-bold mt-9">Categories</h2>
      <ul className="mt-9 space-y-8">
        {[
          { name: "Crafts", count: 2 },
          { name: "Design", count: 8 },
          { name: "Handmade", count: 7 },
          { name: "Interior", count: 1 },
          { name: "Wood", count: 6 },
        ].map((category) => (
          <li key={category.name} className="flex justify-between text-gray-600">
            <span>{category.name}</span>
            <span>{category.count}</span>
          </li>
        ))}

{/* post Section */}
<div className="hidden md:block">
            <h1 className="text-2xl font-bold pt-20 max-sm:pt-14">
              Recent Posts
            </h1>
            <div className="pt-12 max-sm:pt-4 flex flex-col gap-2 max-sm:gap-5">
              <Image
                src="/images/blogpost1.jpg"
                alt="blog post"
                width={300}
                height={80}
              /><div className="space-y-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium pt-2">Going all-in with millennial design</h3>
                <p className="text-md text-gray-500 pt-1">03 Aug 2022</p>
              </div>
              
              <Image
                src="/images/blogpost2.jpg"
                alt="blog post"
                width={300}
                height={80}
               
              /><div className="space-y-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium pt-2">Exploring new ways of decorating</h3>
                <p className="text-md text-gray-500 pt-1">03 Aug 2022</p>
              </div>
              <Image
                src="/images/blogpost3.jpg"
                alt="blog post"
                width={300}
                height={80}
              /><div className="space-y-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium pt-2">Handmade pieces that took time to make</h3>
                <p className="text-md text-gray-500 pt-1">03 Aug 2022</p>
              </div>
              <Image
                src="/images/blogpost4.jpg"
                alt="blog post"
                width={300}
                height={80}
              /><div className="space-y-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium pt-2">Modern home in Milan</h3>
                <p className="text-md text-gray-500 pt-1">03 Aug 2022</p>
              </div>
              
            </div>
            </div>
            </div></div></div></div>
      </ul>
    </aside>

        {/* Blog post 1 Section */}
 
<div className='mx-20'>
<div className='  bg-white shadow-lg rounded-xl pt-8 w-[700px] w-[700px]"'>
<div><Image 
  src="/images/blogpic2.jpg"
  alt="Blog Post"
  width={700}
  height={380}
  className="w-[700px] h-[380px]"
/>
<div className=" h-[245px] bg-white border-b w-[707px] pt-7 text-black">
<h1 className="font-semibold text-[30px] max-sm:text-[18px] text-black pb-3">
        Going all-in with millennial design</h1>
      <p className="text-gray-700 text-[15px] max-sm:text-[12px] pb-5 max-sm:pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
        mauris vitae ultricies leo integer malesuada nunc. In nulla
        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
        pulvinar mattis nunc sed blandit libero. Pellentesque elit
        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
        ornare aenean euismod elementum.</p>
      <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
        Read More </h1></div></div>
    </div>
    </div>

    {/* Blog post 2 Section */}
 <div className='mx-20'>
<div className='  bg-white shadow-lg rounded-xl pt-8 w-[700px] w-[700px]"'>
<div><Image 
  src="/images/blogpic3.jpg"
  alt="Blog Post"
  width={700}
  height={380}
  className="w-[700px] h-[380px]"
/>
<div className=" h-[245px] bg-white border-b w-[707px] pt-7 text-black">
<h1 className="font-semibold text-[30px] max-sm:text-[18px] text-black pb-3">
        Exploring new ways of Decorating</h1>
      <p className="text-gray-700 text-[15px] max-sm:text-[12px] pb-5 max-sm:pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
        mauris vitae ultricies leo integer malesuada nunc. In nulla
        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
        pulvinar mattis nunc sed blandit libero. Pellentesque elit
        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
        ornare aenean euismod elementum.</p>
      <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
        Read More </h1></div></div>
    </div>
    </div>

    {/* Blog post 3 Section */}
 
<div className='mx-20'>
<div className='  bg-white shadow-lg rounded-xl pt-8 w-[700px] w-[700px]"'>
<div><Image 
  src="/images/blogpic4.jpg"
  alt="Blog Post"
  width={700}
  height={380}
  className="w-[700px] h-[380px]"
/>
<div className=" h-[245px] bg-white border-b w-[707px] pt-7 text-black">
<h1 className="font-semibold text-[30px] max-sm:text-[18px] text-black pb-3">
        Handmade pieces that took time to make</h1>
      <p className="text-gray-700 text-[15px] max-sm:text-[12px] pb-5 max-sm:pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
        mauris vitae ultricies leo integer malesuada nunc. In nulla
        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
        pulvinar mattis nunc sed blandit libero. Pellentesque elit
        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
        ornare aenean euismod elementum.</p>
      <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
        Read More </h1></div></div>
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

export default Blog
