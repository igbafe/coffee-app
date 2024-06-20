import React from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaGooglePlusG,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white items-center text-xs flex flex-col">
      <div className="flex text-xs items-center w-2/4 pb-8 gap-x-16">
        <p className="sm:flex hidden gap-2 text-white">
          <IoCallOutline className="mt-1 text-amber-600" />
          PHONE: 08106282103
        </p>
        <p className="sm:flex hidden gap-2 text-white">
          <HiOutlineMapPin className="mt-1 text-amber-600" />
          ADDRESS: SAINT-LOUIS
        </p>
        <div class=" max-w-md p-2 border-b-2 border-gray-300 flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-grow p-2 border-none outline-none bg-stone-900 "
          />
          <button class="ml-2 px-4 py-2  text-white font-semibold flex items-center rounded">
            <span>Subscribe</span>
            <FaTelegramPlane />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center pb-8 w-2/4">
        <div>
          <img
            className="w-[80px] h-[60px]"
            src="/images/coffee-logo-remove.png"
            alt="logo"
          />
          <p className="max-w-[300px]">
            The coffee is brewed by first roasting the green coffee beans over
            hotcoals in a brazier. given an opportunity to sample
          </p>
        </div>
        <div className="lg:flex hidden gap-4">
          <div className="flex justify-center p-1 border cursor-pointer">
            <TiSocialTwitter />
          </div>
          <div className="flex justify-center p-1 border cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="flex justify-center p-1 border cursor-pointer">
            <FaYoutube />
          </div>
          <div className="flex justify-center p-1 border cursor-pointer">
            <FaGooglePlusG />
          </div>
          <div className="flex justify-center p-1 border cursor-pointer">
            <FaSquareInstagram />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-2/4">
        <ul className="flex flex-col md:flex-row gap-4">
          <li className="hover:text-amber-500">
            <NavLink to="/"> HOME </NavLink>
          </li>
          <li className="hover:text-amber-500">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#menu">MENU</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#reservation">RESERVATION</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#pages">PAGES</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#shop">SHOP</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div>
          <button className="flex gap-x-2">
            GO TOP <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
