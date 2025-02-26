import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const SlideShow = () => {
  return (
    <div className="w-full bg-[#FCF8F3] flex items-center h-auto flex-col md:flex-row py-8 px-4 md:px-20">
      {/*  Text Part*/}
      <div className="w-full md:w-1/2">
        <h1 className="text-[rgb(58,58,58)] text-4xl font-extrabold">
          50+ Beautiful rooms <br />
          inspiration
        </h1>
        <p className="text-[#616161] mt-4 ">
          Our designer already made a lot of <br className="hidden md:block" /> beautiful prototype of rooms that inspire you
        </p>
        <button className="mt-4 bg-[#B88E2F] w-full md:w-[176px] text-white py-2 font-semibold hover:bg-[#9C7A3E] transition">
          Explore More
        </button>
      </div>

      {/* Images Part */}
      <div className=" w-full md:w-1/2 flex gap-2 md:gap-4 relative justify-center md:justify-start mt-6 md:mt-0">

        <div className="relative w-[300px] h-[400px]">
          <Image
            src="/images/design1.png"
            alt="Design"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-md w-full p-4">
            <p className="text-sm text-gray-600">01 — Bed Room</p>
            <h1 className="text-xl font-semibold">Inner Peace</h1>
            <button className="bg-[#B88E2F] text-white mt-2 p-2 rounded-full flex items-center">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="relative w-[300px] h-[400px]">
          <Image
            src="/images/design2.png"
            alt="Design"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="relative w-[300px] h-[400px]">
          <Image
            src="/images/design3.png"
            alt="Design"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
            <FaArrowRight className="text-[#B88E2F]" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-3 h-3 bg-[#B88E2F] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
