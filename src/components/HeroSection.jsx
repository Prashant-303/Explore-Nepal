'use client';
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = [

  {
    title: "Cultural Heritage",
    description: "Immerse yourself in Nepal's rich history and vibrant traditions.",
    image: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Explore the Himalayas",
    description: "Discover the breathtaking beauty of the world's highest peaks in Nepal.",
    image: "https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Adventure Awaits",
    description: "Embark on thrilling trekking and rafting experiences in Nepal's diverse landscapes.",
    image: "https://images.pexels.com/photos/1461027/pexels-photo-1461027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-4">
           Explore Nepal
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition border-2 border-white"
      >
        <FaArrowLeft className="text-2xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition border-2 border-white"
      >
        <FaArrowRight className="text-2xl" />
      </button>
    </div>
  );
};

export default HeroSection;
