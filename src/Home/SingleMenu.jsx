import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const SingleMenu = ({ label, icon: Icon, selected }) => {
  const [params] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const newActiveCategory = !activeCategory; // Compute new activeCategory state
    setActiveCategory(newActiveCategory);

    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = { ...currentQuery };

    // Conditionally update or remove the category parameter
    if (newActiveCategory) {
      updatedQuery.category = label;
    } else {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    console.log(url);
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
