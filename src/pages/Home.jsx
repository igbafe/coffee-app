import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "./About";
import Menu from "./Menu";
import Testimonial from "./Testimonial";
import Grade from "./Grade";
import Blog from "./Blog";
import Footer from "./Footer";

function Home() {
  return (
    <div id="home" className="home ">
      {/* HEADER */}
      <div className="bg-black w-full h-[230px]">
        <h2 className="flex flex-wrap justify-center pt-20 text-amber-600 end-10 font-bold text-6xl tracking-wide">
          CAFENA
        </h2>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="md:px-8 px-2 h-[75px] border-b-2 flex flex-row items-center justify-between gap-x-5 ">
        <div className="flex items-center gap-x-5 ">
          <img
            className="w-[80px] h-[60px]"
            src="/images/coffee-logo.jpg"
            alt="logo"
          />
          <p className="sm:flex hidden gap-2">
            <IoCallOutline className="mt-1 text-amber-600" /> 08106282103
          </p>
          <p className="sm:flex hidden gap-2">
            <HiOutlineMapPin className="mt-1 text-amber-600" /> SAINT-LOUIS
          </p>
        </div>
        <div className="flex gap-x-16 items-center">
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
          <div>
            <button className="p-2 text-sm text-white bg-amber-600 rounded-md ">
              TESTY COFFEE
            </button>
          </div>
        </div>
      </div>
      <Navbar />
      <Banner />
      <section id="about" className="py-20 bg-amber-50">
        <About />
      </section>
      <section id="menu" className="py-20 bg-amber-50">
        <Menu />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="grade" className="py-20 bg-amber-100 ">
        <Grade />
      </section>
      <section id="blog" className="py-20 bg-amber-50 ">
        <Blog />
      </section>
      <section id="footer" className="py-20 bg-stone-900 ">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
