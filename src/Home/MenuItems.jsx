import React from "react";
import menu1 from "../assets/images/menu_1.png";
import menu2 from "../assets/images/menu_2.png";
import menu3 from "../assets/images/menu_3.png";
import menu4 from "../assets/images/menu_4.png";
import menu5 from "../assets/images/menu_5.png";
import menu6 from "../assets/images/menu_6.png";
import menu7 from "../assets/images/menu_7.png";
import menu8 from "../assets/images/menu_8.png";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="my-5 p-4 overflow-x-auto">
      <div className="flex justify-between gap-2" >
        <Link to={'/a'}>
          <img src={menu1} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={'/b'}>
          <img src={menu2} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={'/c'}>
          <img src={menu3} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={'/d'}>
          <img src={menu4} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={''}>
          <img src={menu5} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={''}>
          <img src={menu6} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={''}>
          <img src={menu7} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
        <Link to={''}>
          <img src={menu8} alt="" className="max-w-24 max-h-24 h-auto" />
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;
