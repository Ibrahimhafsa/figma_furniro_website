import React from "react";

const Browse = () => {
  return (
    <div className=" ">
      <div className="items-center justify-center text-center ">
        <h5 className="text-[#333333] text-4xl font-bold mt-0 mb-0">Browse the Range</h5>
        <p className="text-[#666666] pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    <div className="flex flex-col gap-3 justify-center items-center pt-2 max-md:pt-2 ">
      
      <div className="flex gap-3 max-md:flex-col max-md:gap-6 max-md:px-6">
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img className="w-[381px] h-[480px]" src="/images/browse1.png" alt="Picture" />
          
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Dining
          </h1>
        </div>
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img className="w-[381px] h-[480px] " src="/images/browse2.png" alt="Picture" />
          
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Living
          </h1>
        </div>
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img className="w-[381px] h-[480px]" src="/images/browse3.png" alt="Picture" />
          
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Bedroom
          </h1>
          </div>
          </div>
          </div>
  </div>        
)};

export default Browse