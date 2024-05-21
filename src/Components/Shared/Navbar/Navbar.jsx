import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import basket from "../../../assets/images/basket_icon.png";
import search from "../../../assets/images/search_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [navModal, setNavModal] = useState(false);
  // console.log(navModal)
  return (
    <div className="mt-8 px-5 items-center flex justify-between">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Menu</Link>
              </li>
              <li>
                <Link>Mobile App</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li className="md:hidden flex flex-col gap-3">
                <Link><img src={search} height={22} width={22} alt="" /></Link>
              </li>
              <li className="md:hidden flex flex-col gap-3">
                <Link><img src={basket} height={22} width={22} alt="" /></Link>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-28" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>Mobile App</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div className="hidden md:flex gap-3">
            <img className="w-5 h-5" src={search} alt="" />
            <img className="w-5 h-5" src={basket} alt="" />
          </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
