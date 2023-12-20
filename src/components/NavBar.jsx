import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="header">
        <ul className="flex justify-between items-center h-20 min-w-full bg-violet-950 select-none">
          <li>
            <NavLink to="/">
              <img
                src="src\assets\logo.png"
                alt="logo"
                className="w-44 h-16 lg:ml-9 ml-2"
              />
            </NavLink>
          </li>
          <div className="flex mr-9">
            <li className="text-white font-medium text-xl lg:mr-10 mr-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="my-auto text-3xl text-white md:mr-0 -mr-5">
              <NavLink to="/checkout">
                <FaCartArrowDown />
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
