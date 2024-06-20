import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="p-4 pb-10 md:px-16 flex justify-between ">
        <p className="block text-amber-500 font-bold md:hidden">CAFENA</p>
        <div className={`flex flex-col justify-center ${isOpen ? '' : 'hidden md:flex'}`}>
          <ul className="flex flex-col md:flex-row gap-4">
            <li className="hover:text-amber-500">
              <NavLink  to="/"> HOME </NavLink>
            </li>
            <li className="hover:text-amber-500">
            <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
            </li>
            <li className="hover:text-amber-500">
            <a href="#menu" onClick={() => setIsOpen(false)}>MENU</a>
            </li>
            <li className="hover:text-amber-500">
              <NavLink to="/reservations"> RESERVATIONS </NavLink>
            </li>
            <li className="hover:text-amber-500">
              <NavLink to="/pages"> PAGES </NavLink>
            </li>
            <li className="hover:text-amber-500">
              <NavLink to="/shop"> SHOP </NavLink>
            </li>
            <li className="hover:text-amber-500">
              <NavLink to="/contact"> CONTACT </NavLink>
            </li>
            <li>
            <CiSearch className="text-2xl max-md:block hidden" />
            </li>
          </ul>
        </div>
        <div className="flex gap-8">
          <CiSearch className="text-2xl max-sm:hidden" />
          <FaShoppingBasket className="text-2xl max-sm:hidden" />
          <div className="md:hidden ">
            <button onClick={toggleNavbar} className="">
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
