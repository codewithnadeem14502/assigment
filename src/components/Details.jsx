import React from "react";
import { useParams } from "react-router-dom";
import salarycard from "../assets/salarycard.png";
import history from "../assets/historyfull.png";
import share from "../assets/newshare.png";
const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <h1>Salary Card</h1>
      </div>
      <div>
        <img src={salarycard} alt="salarycard" />
      </div>
      <div className="flex justify-between items-center ">
        <div className="">
          <h2>Balance</h2>
          <h2>$2509.00</h2>
        </div>
        <div className="flex justify-center">
          <img src={history} alt="history" />
          <img src={share} alt="share" />
        </div>
      </div>
    </div>
  );
};

export default Details;
