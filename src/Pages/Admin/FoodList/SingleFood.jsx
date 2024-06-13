import React, { useState } from "react";
import { assets } from "../../../assets/images/assets";
import { deleteFood } from "../../../api/food";
import toast from "react-hot-toast";
import DeleteModal from "../../../Components/Modal/DeleteModal";
import { id } from "date-fns/locale";

const SingleFood = ({ item, index, refetch }) => {

  const [isOpen,setIsOpen] = useState(false)

  const openModal = ()=>{
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false)
  }

  const modalHandler = id => {
    console.log(id)
    deleteFood(id)
      .then((data) => {
        console.log('clicked')
        console.log(data)
        toast.success("Food Item Deleted Successfully");
        refetch();
      })
      .catch((err) => {
        toast.error("Food Item Couldn't Deleted Successfully")
        console.log(err.message);
      });
    closeModal()
  };

  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>${item.price}</td>
      <td>
        <button
          onClick={() => openModal()}
          className="btn btn-ghost btn-xs"
        >
          <img className="w-3" src={assets.cross_icon} alt="" />
        </button>
      </td>
      <DeleteModal isOpen={isOpen} id={item._id} modalHandler={modalHandler} closeModal={closeModal}></DeleteModal>
    </tr>
  );
};

export default SingleFood;
