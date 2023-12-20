import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from "../../redux/slices/CardsSlice";
import {toast} from 'react-toastify'


function Cards({ info }) {
  const dispatch = useDispatch();
  const [seemore, seeless] = useState(true);
  const [addCart, setAddCart] = useState(true);

  const add = () => {
    dispatch(addToCart(info));
    setAddCart(!addCart);
    toast.success('Product Added', {
    })
  };

  const remove = () => {
    dispatch(removeFromCart(info.id));
    setAddCart(!addCart);
    toast.info('Product Removed', {
    })
  };

  const toggleText = () => {
    seeless(!seemore);
  };



  return (
    <div className="homePage bg-white overflow-hidden">
      <div className="allProducts border-2 my-6 mx-2 w-72 p-3 border-gray-300 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
        <img
          src={info.image}
          alt="Product-Image"
          className="w-56 h-56 object-fit  mb-4 rounded-md mx-auto"
        />
        <h3 className="productName text-xl font-semibold mb-2 ml-4">
          {info.title}
        </h3>
        <p className="productDescription text-gray-600 mb-4 ml-4">
          {seemore ? info.description.substring(0, 120) : `${info.description}.`}
          <button
            className="text-blue-500 ml-2 font-medium cursor-pointer"
            onClick={toggleText}>
            {seemore ? "...seemore" : "...seeless"}
          </button>
        </p>
        <div className="flex justify-between items-center ml-4">
          <span className="productPrice font-bold text-lg text-green-700 ml-2 cursor-pointer">{`${info.price}$`}</span>
          {addCart ? (
            <button
              className="font-medium border-2 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
              onClick={add}>
              Add to Cart
            </button>) 
            : (
            <button
              className="font-medium border-2 text-green-500 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
              onClick={remove}>
              Remove Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
