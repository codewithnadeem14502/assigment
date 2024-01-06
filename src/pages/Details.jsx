import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDragHandle } from "react-icons/md";
import { motion } from "framer-motion";
import { Historydata } from "../Dummydata/Historydata";
import salarycard from "../assets/salarycard.png";
import salarycard2 from "../assets/salarycard2.png";
import hoversalarycard2 from "../assets/hoversalarycard2.png";
import hoversalarycard from "../assets/hoversalarycard.png";
import historyImage from "../assets/historyfull.png";
import shareImage from "../assets/newshare.png";
import DragDetails from "../components/DragDetails";
import Draggable from "react-draggable";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="md:hidden bg-blue-900 w-full h-auto p-5 mb-10">
      <div>
        <button onClick={goBack}>
          <FaArrowLeft className="text-white mb-2" />
        </button>
        <h1 className="text-2xl font-poppins font-bold text-white">Salary</h1>
        <h1 className="text-2xl font-poppins font-bold text-white mb-5">
          Card
        </h1>
      </div>
      <motion.div initial={{ rotate: "0deg" }} animate={{ rotate: "360deg" }}>
        {id == 0 ? (
          <img
            className="object-contain w-full h-full rounded-md"
            src={isHovered ? hoversalarycard : salarycard}
            alt="salarycard"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <img
            className="object-contain w-full h-full rounded-md"
            src={isHovered ? hoversalarycard : salarycard2}
            alt="salarycard"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </motion.div>
      <div className="flex justify-between items-center my-5">
        <div className="">
          <h2 className="font-semibold font-poppins text-gray-500">Balance</h2>
          <h1 className="text-2xl font-poppins font-bold text-white">
            $2509.00
          </h1>
        </div>
        <div className="flex justify-center space-x-2">
          <img src={shareImage} alt="share" />
          <img src={historyImage} alt="history" />
        </div>
      </div>
      <Draggable axis="y">
        <div className="md:hidden  bg-blue-900 w-full h-[450px] mb-10 overflow-scroll ">
          <div className="flex justify-center items-center text-center w-full">
            <button className="flex mb-5">
              <MdOutlineDragHandle className="text-3xl text-white" />
              <MdOutlineDragHandle className="text-3xl text-white" />
            </button>
          </div>

          {Historydata.map((data) => (
            <DragDetails key={`catalog-${data.index}`} data={data} />
          ))}
        </div>
      </Draggable>
    </div>
  );
};

export default Details;
