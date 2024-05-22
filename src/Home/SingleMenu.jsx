import React from "react";
import { Link } from "react-router-dom";

const SingleMenu = ({ label, icon: Icon }) => {
  return (
    <>
      <Link to={"/a"} className="group">
         <img src={Icon} alt="" className="max-w-24 max-h-24 h-auto rounded-full object-cover group-hover:scale-110 transition" />
         <p>{label}</p>
      </Link>
    </>
  );
};

export default SingleMenu;
