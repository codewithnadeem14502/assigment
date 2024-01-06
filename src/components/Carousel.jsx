import { useState } from "react";
import card1 from "../assets/card.jpeg";
import card2 from "../assets/card2.png";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [card1, card2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="md:hidden  w-full h-[350px] overflow-x-auto scrollbar-hide">
      <div className="flex w-full h-[300px]  overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[200px] h-[300px] flex-shrink-0"
            style={{
              transform: `translateX(${-currentIndex * 200}px)`,
            }}
          >
            <div className="w-[250px] h-[250px] m-5">
              <Link to={`/salarycard/${index}`}>
                <img
                  className="object-contain w-full h-full rounded-md"
                  src={image}
                  alt={`card${index + 1}`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" inset-x-0 bottom-4 flex justify-center space-x-2">
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
