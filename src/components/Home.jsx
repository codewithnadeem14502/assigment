import profile from "../assets/profile.jpeg";
import Corrosal from "./Corrosal";

const Home = () => {
  return (
    <div className="bg-blue-900 w-full h-[700px] p-5">
      {/* txt-content + profile image */}
      <div className="flex justify-between content-center">
        {/* text  */}
        <div className="flex-col pt-3">
          <h1 className="text-3xl font-bold text-white">Bank </h1>
          <h1 className="text-3xl font-bold text-white">Cards </h1>
          <h2 className="font-semibold text-gray-500">Balance</h2>
          <h1 className="font-bold text-white">$2,7480.00</h1>
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
      <Corrosal />
    </div>
  );
};

export default Home;
