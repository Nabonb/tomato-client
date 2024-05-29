import React from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import TopDishes from "./TopDishes";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-8">
        <Menu></Menu>
      </div>
      <hr className="h-1 bg-gray-200 border-0"/>
      <div className="my-8">
        <TopDishes></TopDishes>
      </div>
      <div className="my-8">
        <DownloadApp></DownloadApp>
      </div>
      <div className="my-8">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
