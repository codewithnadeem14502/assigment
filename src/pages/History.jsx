import profile from "../assets/profile.jpeg";
import HistoryCard from "../components/HistoryCard";
import { Historydata } from "../Dummydata/Historydata";
const History = () => {
  return (
    <div className="bg-blue-900 w-full h-full p-5 pb-16">
      <div className="flex justify-between items-center mb-2 ">
        <div>
          <h1 className="text-3xl font-poppins font-bold text-white">
            History
          </h1>
        </div>
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src={profile}
            alt="profileImag"
          />
        </div>
      </div>
      <div className=" w-full h-screen overflow-y-scroll no-scrollbar">
        <div>
          <h1 className="text-white text-lg font-bold my-3">13-April</h1>
          {Historydata.map((data) => (
            <HistoryCard key={`history-${data.index}`} data={data} />
          ))}
        </div>
        <div>
          <h1 className="text-white text-lg font-bold my-6">20-March</h1>
          {Historydata.map((data) => (
            <HistoryCard key={`history-${data.index}`} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
