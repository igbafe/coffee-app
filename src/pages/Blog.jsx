import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="pb-3 text-[8px] w-3/4">
          {" "}
          <button className="bg-amber-600 p-1 text-white rounded-md">
            NEWS & BLOG
          </button>
        </div>
        <div className="flex pb-5 w-3/4 justify-between">
          <h1 className="text-3xl font-semibold">LATEST NEWS & BLOG</h1>
          <button className="text-[10px] p-3 text-white rounded-md bg-amber-600">
            LEARN MORE
          </button>
        </div>
        <div className="flex gap-6 justify-center max-md:flex-wrap">
          <div className="flex flex-col gap-3">
            <img
              src="/images/coffee-poster.jpg"
              className="h-[200px] rounded-lg w-[300px]"
              alt="coffee"
            />
            <p className="text-xs">BY: RASALINA</p>
            <h1 className="font-semibold w-[300px]">
              Questions Business Must Be Able To Answers
            </h1>
            <div className="flex justify-between w-[250px]">
              <p className="flex gap-x-2 text-center text-xs items-center">
                READ MORE <FaArrowRight />
              </p>
              <CiShare2 />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="/images/snack.jpg"
              className="h-[200px] rounded-lg w-[300px]"
              alt="coffee"
            />
            <p className="text-xs">BY: RASALINA</p>
            <h1 className="font-semibold w-[300px]">
              Questions Business Must Be Able To Answers
            </h1>
            <div className="flex justify-between w-[250px]">
              <p className="flex gap-x-2 text-center text-xs items-center">
                READ MORE <FaArrowRight />
              </p>
              <CiShare2 />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="/images/coffee-white.jpg"
              className="h-[200px] rounded-lg w-[300px]"
              alt="coffee"
            />
            <p className="text-xs">BY: RASALINA</p>
            <h1 className="font-semibold w-[300px]">
              Questions Business Must Be Able To Answers
            </h1>
            <div className="flex justify-between w-[250px]">
              <p className="flex gap-x-2 text-center text-xs items-center">
                READ MORE <FaArrowRight />
              </p>
              <CiShare2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
