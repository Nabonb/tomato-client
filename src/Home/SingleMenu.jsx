import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const SingleMenu = ({ label, icon: Icon, selected }) => {
  // const [active, setActive] = useState(false);
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  // console.log(params)
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      // console.log(currentQuery)
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };
    // console.log(updatedQuery)

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    console.log(url)
    navigate(url);
  };
  return (
    <>
      <div onClick={handleClick}  className={`group border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer ${
      selected
        ? 'border-b-neutral-800 text-neutral-800'
        : 'border-transparent text-neutral-500'
    }`}>
        <img
          src={Icon}
          alt=""
          className={`max-w-24 max-h-24 h-auto rounded-full object-cover group-hover:scale-110 transition  `}
        />
        <p>{label}</p>
      </div>
    </>
  );
};

export default SingleMenu;
