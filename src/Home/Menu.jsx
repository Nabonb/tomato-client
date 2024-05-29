import React from "react";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div>
      <div id="menu" className="text-center w-full">
        <h1 className="text-xl md:text-2xl font-semibold">Explore Our Menu</h1>
        <p className="md:w-1/2 md:mx-auto p-4">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your dining experience, one delicious meal at a
          time.
        </p>
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

export default Menu;
