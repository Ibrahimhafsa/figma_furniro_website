import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full h-[570px] flex flex-col items-center py-6 relative overflow-hidden">
      {/* Title*/}
      <p className="text-center text-[#3A3A3A] text-lg">Share your setup with</p>
      <h1 className="font-bold text-[40px] text-center text-[#3A3A3A]">
        #FuniroFurniture
      </h1>

      {/* Gallery Container */}
      <div className="relative w-full h-full flex mt-1">
        <div className="relative w-full max-w-[1450px] h-full">
          {/* Image 1 - Tall Left */}
          <div className="absolute w-[130px] h-[250px] ml-2">
            <Image src="/images/gallery1.png" alt="Gallery Image" layout="fill" objectFit="cover" />
          </div>

          {/* Image 2 - Desk Setup */}
          <div className="absolute top-10 left-[160px] w-[280px] h-[210px]">
            <Image src="/images/gallery2.png" alt="Gallery Image" layout="fill" objectFit="cover"  />
          </div>

          {/* Image 3 - lighting view Chair */}
          <div className="absolute top-0 right-0 w-[270px] h-[245px] hidden md:block">
            <Image src="/images/gallery7.png" alt="Gallery Image" layout="fill" objectFit="cover"  />
          </div>

          {/* Image 4 - brown chair */}
          <div className="absolute top-[260px] left-[10px] w-[150px] h-[200px]">
            <Image src="/images/gallery3.png" alt="Gallery Image" layout="fill" objectFit="cover"  />
          </div>

          {/* Image 5 - two tables */}
          <div className="absolute top-[270px] left-[175px] w-[265px] h-[220px]">
            <Image src="/images/gallery4.png" alt="Gallery Image" layout="fill" objectFit="cover"  />
          </div>

          {/* Image 6 - kitchen */}
          <div className="absolute top-[270px] right-[35px] w-[300px] h-[190px] hidden md:block">
            <Image src="/images/gallery9.png" alt="Gallery Image" layout="fill" objectFit="cover" />
          </div>

          {/* Image 7 - center Dining table */}
          <div className="absolute bottom-28 left-[460px] w-[300px] h-[235px]">
            <Image src="/images/gallery5.png" alt="Gallery Image" layout="fill" objectFit="cover" />
          </div>

          {/* Image 8 - bedroom */}
          <div className="absolute  left-[780px] w-[270px] top-[40px] h-[210px]">
            <Image src="/images/gallery6.png" alt="Gallery Image" layout="fill" objectFit="cover"  />
          </div>

          {/* Image 9 - photo frame */}
          <div className="absolute bottom-0 right-[355px] w-[200px] h-[155px] hidden md:block">
            <Image src="/images/gallery8.png" alt="Gallery Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
