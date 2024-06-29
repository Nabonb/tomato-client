import React, { useContext, useEffect, useState } from 'react';
import { getAdminFood, getOrderedFood } from '../../../api/food';
import { AuthContext } from '../../../providers/AuthProvider';
import SingleOrders from './SingleOrders';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orderedFood, setOrderedFood] = useState([]);
  
    useEffect(() => {
      getAdminFood().then((data) => {
        setOrderedFood(data);
      });
    }, [user]);
    // console.log(orderedFood);
  
    return (
      <div>
        <h1 className="text-2xl font-bold m-4">All Orders</h1>
        <div>
          {orderedFood.map((order,index) => (
            <SingleOrders key={index} item={order}></SingleOrders>
            )
          )}
        </div>
      </div>
    );
};

export default Orders;