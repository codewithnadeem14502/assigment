import profile from "../assets/profile.jpeg";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="bg-green-500  items-center justify-center text-center w-full h-screen hidden md:block">
        <h1 className="text-3xl font-poppins font-bold mx-auto">
          Check In Mobile View
        </h1>
      </div>

      <div className="md:hidden bg-blue-900 w-full h-[620px] p-5">
        {/* txt-content + profile image */}
        <div className="flex justify-between content-center">
          {/* text  */}
          <div className="flex-col pt-3">
            <h1 className="text-3xl font-poppins font-bold text-white">
              Bank{" "}
            </h1>
            <h1 className="text-3xl font-poppins font-bold text-white">
              Cards{" "}
            </h1>
            <h2 className="font-semibold font-poppins text-gray-500">
              Balance
            </h2>
            <h1 className="font-bold font-poppins text-white">$2,7480.00</h1>
          </div>
          <div>
            <div>
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
