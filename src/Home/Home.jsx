import React from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import TopDishes from "./TopDishes";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-8">
        <Menu></Menu>
      </div>
      <hr className="h-1 bg-gray-200 border-0 " />
      <div className="my-8">
        <TopDishes></TopDishes>
      </div>
    </>
  );
};

export default Home;
