import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="relative h-[450px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/beans.png')", // Replace with your image URL
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/90 to-transparent mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 text-white flex flex-col gap-5 pb-3 justify-center items-center text-center">
        <h1 className="text-xs bg-amber-600 p-2 font-bold">TESTIMONIAL</h1>
        <p>OUR CUSTOMER REVIEW</p>
        <div className="flex gap-2">
          <div>
            {" "}
            <FaBookmark className="text-amber-600" />
          </div>
          <div>
            {" "}
            <FaBookmark className="text-amber-600" />
          </div>
        </div>
        <p className="max-w-[400px]">
          Very good quality of food and service. vast menu with child friendly
          items as well as seafood and even enteries for those that does not
          like sea food . Great place! Thanks. We absolutely love everything
          here
        </p>
        <img src="/images/avatar.png" className="h-[50px]" alt="" />
        <p>IGBAFE PETER</p>
        <p className="text-amber-600 ">FOUNDER AND CEO</p>
      </div>
    </div>
  );
}

export default Testimonial;
