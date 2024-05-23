import React from "react";
import { menu_list } from "../assets/images/assets";
import SingleMenu from "./SingleMenu";
import "./MenuItems.css"
import { useSearchParams } from "react-router-dom";

const MenuItems = () => {
  const [params, setParams] = useSearchParams()
  console.log(params)
  const categoryParam = params.get('category')
  return (
    <div className="my-5 p-4 overflow-x-scroll hide-scrollbar">
      <div className="flex justify-between gap-6 md:gap-2">
        {menu_list.map((menu, index) => (
          <SingleMenu
            key={index}
            icon={menu.menu_image}
            label={menu.menu_name}
            selected={categoryParam === menu.menu_name}
          ></SingleMenu>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
