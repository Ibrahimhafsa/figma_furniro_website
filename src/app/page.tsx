import React from "react";
import Browse from "./components/browse";
import HeroSection from "./components/herosection";
import OurProduct from "./components/ourproduct";
import OurProducts from "./components/ourproduct";
import SlideShow from "./components/slideshow";
import Gallery from "./components/gallery";
export default function Home() {
  return (
    <div className="font-poppins">
            <HeroSection/>
            <Browse/>
            <OurProducts/>
            <SlideShow/>
            <Gallery/>
    </div>
  );
}