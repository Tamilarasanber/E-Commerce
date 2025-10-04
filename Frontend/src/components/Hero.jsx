import React from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menBanner from '../assets/men-banner.webp'
import womemenBanner from '../assets/women-banner.webp'
import accessoriesBanner from '../assets/Accessories.webp'

// Carousel slide data
const slides = [
  {
    banner: menBanner,
    title: "Men's Fashion",
    description: "Discover the latest styles in men's apparel, shoes, and accessories.",
    cta: "/men"
  },
  {
    banner: womemenBanner,
    title: "Women's Fashion",
    description: "Find chic, trendy outfits and accessories for every occasion.",
    cta: "/women"
  },
  {
    banner: accessoriesBanner,
    title: "Accessories",
    description: "Browse premium bags, jewelry, hats, and more.",
    cta: "/accessories"
  }
];

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

const Hero = () => {
  return (
    <section className="bg-gray-100 h-[85vh] flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>
         {slides.map((slide, idx) => (
  <div key={idx} className="relative">
    {/* Image wrapper */}
    <img
      src={slide.banner}
      alt={slide.title}
      className="w-full h-[85vh] object-cover object-[77%_0%] md:object-[0%_-10%] opacity-90 md:opacity-100" 
    />
    
    {/* Absolute overlay */}
    <div className="absolute inset-0 flex flex-col items-start justify-center px-6">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-white">
        {slide.title}
      </h1>
      <p className="text-lg md:text-xl mb-6 text-white">
        {slide.description}
      </p>

      <Link
        to={slide.cta}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Explore
      </Link>
    </div>
  </div>
))}

        </Slider>
      </div>
    </section>
  );
};

export default Hero;
