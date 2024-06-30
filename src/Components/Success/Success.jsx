import React, { useContext, useEffect, useState } from "react";
import { getOrderedFood } from "../../api/food";
import { AuthContext } from "../../providers/AuthProvider";
import Ordered from "./Ordered";
import Loader from "../Shared/Loader/Loader";

const Success = () => {
  const { user } = useContext(AuthContext);
  const [orderedFood, setOrderedFood] = useState([]);
  // const [loading, setLoading] = useState(true);
  console.log(user?.email);

  useEffect(() => {
    getOrderedFood(user?.email).then((data) => {
      setOrderedFood(data);
      // setLoading(false);
    });
  }, [user]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">My Orders</h1>
      <div>
        {orderedFood.map((order, index) => (
          <Ordered key={index} item={order}></Ordered>
        ))}
      </div>
    </div>
  );
};

export default Success;
