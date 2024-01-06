import line from "../assets/linecatolog.svg";

const CatalogCard = ({ data }) => {
  const { image_url, heading, paragraph } = data;
  return (
    <div className="mt-2 ">
      <div className="flex justify-between items-center   my-2">
        <div>
          <img src={image_url} alt="image" className="w-15 h-15 rounded-full" />
        </div>
        <div className=" w-1/2">
          <h2 className="text-white text-lg">{heading}</h2>
          <p className="text-md text-gray-500">{paragraph}</p>
        </div>
        <div>
          <button className="text-blue-400 border-blue-400 border-2 px-5 py-2 rounded-md">
            Pay
          </button>
        </div>
      </div>
      <div>
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default CatalogCard;
