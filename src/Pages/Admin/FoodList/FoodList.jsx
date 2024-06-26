import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import SingleFood from "./SingleFood";
import Loader from "../../../Components/Shared/Loader/Loader";

const FoodList = () => {
  const { loading } = useContext(AuthContext);
  const [footItemLoading,setFoodItemLoading] = useState(false)

  const { data: foods = [], refetch } = useQuery({
    queryKey: ["foods"],
    enabled: !loading,
    queryFn: async () => {
      setFoodItemLoading(true)
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
      console.log(res.data);
      setFoodItemLoading(false)
      return res.data;
    },
  });

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div className="m-20">
      <h1 className="text-3xl font-semibold">All Food List</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((item, index) => (
                <SingleFood key={index} item={item} index={index} refetch={refetch}></SingleFood>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
