import React from "react";
import { assets } from "../assets/images/assets";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-2xl md:text-5xl font-bold mb-8 md:mb-14">
        For Better Experience Download <br />
        Tomato App
      </h1>
      <div className=" flex justify-center">
        <Link><img src={assets.play_store} alt="" /></Link>
        <Link><img src={assets.app_store} alt="" /></Link>
      </div>
    </div>
  );
};

export default DownloadApp;
