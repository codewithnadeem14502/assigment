import profile from "../assets/profile.jpeg";
import CatalogCard from "../components/CatalogCard";
import { CatalogData } from "../Dummydata/CatalogData";
const Catalog = () => {
  return (
    <div className="bg-blue-900 w-full h-screen p-5 pb-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold font-poppins text-white">
            Catolog
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

      {CatalogData.map((data) => (
        <CatalogCard key={`catalog-${data.index}`} data={data} />
      ))}
    </div>
  );
};

export default Catalog;
