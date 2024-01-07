import profile from "../assets/Ellipse 1.jpg";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div className="bg-green-500  items-center justify-center text-center w-full h-screen hidden md:block">
        <h1 className="text-3xl font-poppins font-bold mx-auto">
          Check In Mobile View
        </h1>
      </div>

      <div
        className="md:hidden bg-blue-900 w-full mobile:h-[840px] 
      bigmobile:h-[950px]  p-5 "
      >
        {/* txt-content + profile image */}
        <div className="flex justify-between content-center">
          {/* text  */}
          <div className="flex-col ">
            <h1 className="text-3xl font-poppins font-bold text-white">Bank</h1>
            <h1 className="text-3xl font-poppins font-bold text-white">
              Cards
            </h1>
            <h2 className="font-semibold font-poppins text-gray-500">
              Balance
            </h2>
            <h1 className="font-bold text-2xl font-poppins text-white">
              $2,7480.00
            </h1>
          </div>
          <div>
            <div className="mt-5">
              <img
                className="w-10 h-10 rounded-full"
                src={profile}
                alt="profileImag"
              />
            </div>
          </div>
        </div>
        {/* cards */}
        <Carousel />
      </div>
    </>
  );
};

export default Home;
