import React from "react";
import Banner from "./Banner";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <Banner></Banner>

      <div className="px-5 my-8">
        <Menu></Menu>
      </div>
    </>
  );
};

export default Home;
