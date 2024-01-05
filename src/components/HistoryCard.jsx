import line from "../assets/linecatolog.svg";

const HistoryCard = ({ data }) => {
  const { image_url, heading, paragraph, Amount } = data;
  return (
    <div className="  my-2">
      <div className="flex  justify-between items-center ">
        <div>
          <img src={image_url} alt="image" className="w-10 h-10 rounded-full" />
        </div>
        <div className=" w-1/2">
          <h2 className="text-white text-lg">{heading}</h2>
          <p className="text-md text-gray-500">{paragraph}</p>
        </div>
        <div>
          <h2 className="text-white text-lg font-bold">{Amount}</h2>
        </div>
      </div>
      <div className="mt-2">
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default HistoryCard;
