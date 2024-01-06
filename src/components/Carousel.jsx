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
    <div className="md:hidden  w-full h-[450px] mt-10    content-center  overflow-x-auto scrollbar-hide mobile:h-[550px] bigmobile:h-[650px] bigmobile:mt-0 ">
      <div className="flex w-full   overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[370px] mobile:h-[500px]  bigmobile:h-[550px]"
            style={{
              transform: `translateX(${-currentIndex * 200}px)`,
            }}
          >
            <div className="w-[210px] mobile:w-[250px] bigmobile:w-[250px] m-5">
              <Link to={`/salarycard/${index}`}>
                <img
                  className="object-contain w-[300px] h-[320px] mobile:h-[500px]  bigmobile:h-[520px] rounded-md"
                  src={image}
                  alt={`card${index + 1}`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" inset-x-0 bottom-4 flex justify-center items-center space-x-2  pb-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            } w-8 h-1 bigmobile:w-12 rounded-full focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
