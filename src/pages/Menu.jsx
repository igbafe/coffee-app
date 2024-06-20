import React, { useState } from "react";
import { BsBasket2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center py-10">
      {/* Main Header */}
      <h1 className="text-[10px] tracking-wide rounded-md text-white bg-amber-600 p-1">
        SPECIAL MENU
      </h1>
      <h1 className="text-3xl font-bold text-gray-700">CAFENA POPULAR MENU</h1>

      {/* Menu Items with centered border */}
      <div className="max-md:block hidden" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`flex pb-6 justify-center ${isOpen ? "" : "hidden md:flex"}`}
      >
        <ul className="flex flex-col md:flex-row gap-6 border border-gray-300 rounded-lg ">
          <li className="hover:text-stone-500 p-2 px-4 bg-amber-600 text-white rounded-lg text-xs">
            <NavLink to="/">ALL</NavLink>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <a href="#about">CHOCOLATE</a>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <NavLink to="/menu">COFFEE</NavLink>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <NavLink to="/reservations">SANDWICHES</NavLink>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <NavLink to="/pages">SWEETS</NavLink>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <NavLink to="/shop">BLACK TEA</NavLink>
          </li>
          <li className="hover:text-amber-600 p-2 text-xs">
            <NavLink to="/contact">GREEN TEA</NavLink>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 max-md:auto-rows-auto gap-5  md:grid-cols-3 sm:grid-col-2">
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/black-coffee.jpg"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/coffe-ff.png"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/fine-coffee.png"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/coffee-white.jpg"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/snack.jpg"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4">
          <img
            src="/images/coffee-poster.jpg"
            className="rounded-md w-[250px] h-[170px]"
            alt="coffee"
          />
          <h1> AMERICANO COFFEE</h1>
          <p>
            PRICE - <span className="text-amber-600">$325 /</span>
            <span> $345</span>
          </p>
          <div className="flex justify-center gap-2 pb-4">
            <div className="flex justify-center p-1 border cursor-pointer">
              <BsBasket2 />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <CiHeart />
            </div>
            <div className="flex justify-center p-1 border cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
