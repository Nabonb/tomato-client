import React from "react";
import { Link } from "react-router-dom";


const EmptyState = ({ message, address, label }) => {
  return (
    <div className="gap-5 flex flex-col justify-center items-center py-16 ">
      <p className=" text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <button style={{ backgroundColor: "tomato" }}
          className="btn text-white">{label}</button>
      </Link>
    </div>
  );
};

export default EmptyState;