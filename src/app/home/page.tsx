import Link from 'next/link'
import React from 'react'

import Browse from '../components/browse'
import HeroSection from '../components/herosection'
import OurProducts from '../components/ourproduct'
import SlideShow from '../components/slideshow'
import Gallery from '../components/gallery'


const Home = () => {
  return (
    <div>
      <Link href="/"></Link>
      <div className="font-poppins overflow-x-clip flex flex-col gap-0">
            <HeroSection/>
            <Browse/>
            <OurProducts/>
            <SlideShow/>
            <Gallery/>
          
          </div>
    </div>
  )
}

export default Home

