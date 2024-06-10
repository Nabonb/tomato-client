import React, { useState } from "react";
import uploadImage from "../../../assets/images/upload_area.png";
import { menu_list } from "../../../assets/images/assets";
import { imageUpload } from "../../../api/utils";
import { addFood } from "../../../api/food";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const AddFood = () => {
  const [loading, setLoading] = useState(false);
  const [uploadText, setUploadText] = useState("");
  const [uploadImageURL, setUploadImageURL] = useState(null);

  const handleImageChange = (image) => {
    console.log(image);
    setUploadText(image.name);
    imageUpload(image).then((data) => {
      setUploadImageURL(data.data.display_url);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = event.target.name.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const price = event.target.price.value;

    const foodData = {
      name,
      description,
      category,
      price,
      image: uploadImageURL,
    };

    //Post room data into the server
    addFood(foodData)
      .then((data) => {
        toast.success("Food Added!");
        // navigate('/dashboard/food-list')
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };
  return (
    <div className="m-20 md:w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="w-1/2">
          <p className="mb-2">Upload Food Image</p>
          <label className="cursor-pointer border-slate-400 w-1/2">
            <input
              onChange={(event) => handleImageChange(event.target.files[0])}
              type="file"
              name="image"
              id="image"
              className="hidden w-1/2"
              required
            />
            {uploadText ? (
              <img className="w-full" src={uploadImageURL} alt=""></img>
            ) : (
              <img className="w-full" src={uploadImage} alt="" />
            )}
          </label>
        </div>
        <div className="mt-6 w-full">
          <label htmlFor="name" className="mb-2 block">
            Product name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Product Name"
            className="input input-bordered w-full md:w-1/2"
            required
          />
        </div>
        <div className="mt-6 h-40 w-full">
          <label htmlFor="description" className="mb-2 block">
            Product Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full md:w-1/2 h-28"
            placeholder="Enter Food Description"
            required
          ></textarea>
        </div>
        <div className="mt-6 md:flex gap-3">
          <div>
            <label htmlFor="category" className="block text-gray-600 mb-3">
              Category
            </label>
            <select
              required
              className=" w-full px-4 py-3 border border-gray-200 focus:outline-rose-400 rounded-md"
              name="category"
            >
              {menu_list.map((menu, index) => (
                <option value={menu.menu_name} key={index}>
                  {menu.menu_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 md:mt-0">
            <div>
              <label htmlFor="price" className="block text-gray-600 mb-3">
                Price
              </label>
              <input
                className=" w-full md:w-1/2 px-4 py-3 text-gray-800 border border-gray-200 focus:outline-rose-400 rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="Price"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "tomato" }}
          className="btn text-white mt-5"
        >
          {loading ? (
            <ImSpinner9 size={24} className="animate-spin mx-auto" />
          ) : (
            "Add Item"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddFood;
