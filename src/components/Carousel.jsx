import { useState } from "react";
import { Link } from "react-router-dom";
import card1 from "../assets/card.jpeg";
import card2 from "../assets/card2.png";

const Carousel = () => {
  const images = [card1, card2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="md:hidden  w-full h-[400px]  content-center  overflow-x-auto scrollbar-hide">
      <div className="flex w-full   overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              transform: `translateX(${-currentIndex * 200}px)`,
            }}
          >
            <div className="w-[210px] m-5">
              <Link to={`/salarycard/${index}`}>
                <img
                  className="object-contain w-[300px] h-[300px] rounded-md"
                  src={image}
                  alt={`card${index + 1}`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" inset-x-0 bottom-4 flex justify-center items-center space-x-2 pb-20 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            } w-8 h-1 rounded-full focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
