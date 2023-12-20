import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import {toast} from 'react-toastify'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CardsSlice";
import ramji from "../assets/ramji.mp3"

function CheckOut() {
  const cartItems = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const audio = new Audio(ramji);

  const deleted = (item) => {
    dispatch(removeFromCart(item));
    toast.error("Product Deleted");
  };

  const playCheckoutSound = () => {
    totalPrice >=1 ? audio.play() : toast.error("Please Select At Least One Item.",{theme: "colored" })
  };

  return (
    <div className="checkoutPage bg-gray-100 min-h-screen overflow-hidden md:flex flex-col justify-center">
      <div className="goBackToHomeButton relative top-4 left-1 mb-1b">
        <NavLink to="/">
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            <IoMdArrowRoundBack /> Go To Home
          </button>
        </NavLink>
      </div>

      <div className="selectedProducts flex flex-wrap flex-col justify-center items-center">
        <div className="checkoutArea bg-white h-48 w-48 flex flex-col justify-between items-center mt-7 p-4 md:p-8 rounded-md shadow-md">
          <div className="mb-4">
            <p className="text-xl md:text-2xl font-bold text-left">
              Total:{totalPrice.toFixed(2)}$
            </p>
          </div>
          <div>
            <button className="checkoutButton bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" onClick={playCheckoutSound}>
              Checkout 🎶
            </button>
          </div>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="allProducts border-2 my-6 w-72 p-3 border-gray-300 rounded-md shadow-lg transition duration-200"
          >
            <img
              src={item.image}
              alt="Product-Image"
              className="w-56 h-56 object-fit mb-4 rounded-md mx-auto"
            />
            <h3 className="productName text-xl font-semibold mb-2 ml-4">
              {item.title}
            </h3>
            <p className="productDescription text-gray-600 mb-4 ml-4">
              {item.description}
            </p>
            <div className="flex justify-between items-center ml-4">
              <span className="productPrice font-bold text-lg text-green-700 ml-2 cursor-pointer">
                {`${item.price}$`}
              </span>
              <button
                className="deleteButton bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-200"
                onClick={() => deleted(item)}>
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckOut;

