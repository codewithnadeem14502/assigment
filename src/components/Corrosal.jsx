import React, { useState } from "react";
import image1 from "../assets/card.jpeg";
import image2 from "../assets/card.jpeg";

const Carousel = () => {
  const images = [image1, image2];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-md mx-auto mt-24 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{
          transform: `translateX(-${currentImage * (100 / images.length)}%)`, // Adjusted the calculation
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index + 1}`}
            className="w-120 h-80 object-fill rounded-lg rotate-90"
          />
        ))}
      </div>
      <div className="w-120 h-2 flex justify-center">
        <button
          onClick={nextImage}
          className={`transform px-6 py-0 bg-slate-100 text-white rounded-md focus:outline-none mr-5 ${
            currentImage === 0 ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentImage === 0}
        >
          -
        </button>
        <button
          onClick={prevImage}
          className={`transform px-6 py-0 bg-slate-100 text-white rounded-md focus:outline-none ${
            currentImage === images.length - 1
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentImage === images.length - 1}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Carousel;
