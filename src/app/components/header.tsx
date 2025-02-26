import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
  return (
    <div>
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <Image
              width={55}
              height={33}
              src="/images/logo.png"
              alt="Logo"
              className="w-13 md:w-15"
            />

      <span className="text-2xl md:text-4xl font-bold font-montserrat">Furniro</span>
    </a>
    <nav className=" md:ml-auto md:mr-auto  items-center text-base justify-center text-black">
      <Link className="mx-9 hover:text-gray-900" href="/home">Home</Link>
      <Link className="mx-9 hover:text-gray-900" href={"/shop"}>Shop</Link>
      <Link className="mx-9 hover:text-gray-900" href={"/blog"}>Blog</Link>
      <Link className="mx-9 hover:text-gray-900" href={"/contact"}>Contact</Link>
    </nav>

    <div className='hidden md:block'>
    <div className='flex  items-center justify-center sm:gap-1'>
    <MdPersonOutline className='text-black size-5 w-[28px] h-[28px] mx-5'/>
    <IoSearch className='text-black size-5 w-[28px] h-[28px] mx-5'/>
    <FaRegHeart className='text-black size-5 w-[28px] h-[28px] mx-5'/>
    <AiOutlineShoppingCart className='text-black size-5 w-[28px] h-[28px] mx-5'/>
    </div>
    </div>

  </div>
</header>

    </div>
  )
}

export default Header;
