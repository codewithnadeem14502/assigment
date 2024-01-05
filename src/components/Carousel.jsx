// Carousel.js
import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/card.jpeg";
import image2 from "../assets/card.jpeg";
import { Link } from "react-router-dom";

const images = [image1, image2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-screen-md h-auto mx-auto items-center mt-5">
      <div className="flex justify-between">
        {images.map((image, index) => (
          <Link to={`/${index}`} key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-[250px] h-auto ml-4 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-2 px-7 rounded-full ${
              index === currentIndex ? "bg-gray-300" : "bg-slate-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
