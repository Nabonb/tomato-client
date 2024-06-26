import React, { useContext, useState } from "react";
import logo from "../../../assets/images/logo.png";
import basket from "../../../assets/images/basket_icon.png";
import search from "../../../assets/images/search_icon.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Avatar from "./Avatar";

const Navbar = () => {
  const { user, logOut, getSubTotalCartAmount,role } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
 

  return (
    <div className="sticky top-0 z-50 bg-base-100 mt-8 px-5 items-center flex justify-between">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-5xl"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#mobile-app">Mobile App</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li className="md:hidden flex flex-col gap-3">
                <Link>
                  <img src={search} className="h-5 w-5" alt="" />
                </Link>
              </li>
              <li className="md:hidden flex flex-col gap-3">
                {role ? '' : getSubTotalCartAmount() > 0 ? (
                  <Link className="relative" to="/order">
                    <img className="w-5 h-5" src={basket} alt="" />
                    <div className="bg-red-400 rounded-full h-2 w-2 absolute left-8 bottom-5"></div>
                  </Link>
                ) : (
                  <Link className="relative" to="/order">
                    <img className="w-5 h-5" src={basket} alt="" />
                  </Link>
                )}
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#mobile-app">Mobile App</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 ">
          <div className="hidden md:flex gap-3">
            <Link>
              <img className="w-5 h-5" src={search} alt="" />
            </Link>
            {role ?'': getSubTotalCartAmount() > 0 ? (
              <Link className="relative" to={user ? "/order" : '/login'}>
                <img className="w-5 h-5" src={basket} alt="" />
                <div className="bg-red-400 rounded-full h-2 w-2 absolute right-0 bottom-5"></div>
              </Link>
            ) : (
              <Link className="relative" to={user ? "/order" : '/login'}>
                <img className="w-5 h-5" src={basket} alt="" />
              </Link>
            )}
          </div>
          <div
            className="relative"
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <Avatar></Avatar>
            {openModal && (
              <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm z-10">
                <div className="flex flex-col cursor-pointer">
                  {user ? (
                    <>
                      {role && <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Dashboard
                      </Link>}
                      {!role && <Link className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer" to="/success">Orders</Link>}
                      <div
                        onClick={() => {
                          logOut();
                        }}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                      
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
