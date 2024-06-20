import React from "react";
import { IoIosPlay } from "react-icons/io";

function Banner() {
  return (
    <>
      <div className="flex h-[400px] gap-10 items-center px-12 pb-16">
        <div className="max-w-[500px]">
          <h2 className="font-semibold text-6xl pb-3 tracking-wide">
            DISTINCT
          </h2>
          <h2 className="font-semibold text-6xl pb-4 tracking-wide">
            COFFEE AROMA
          </h2>
          <p className="text-xs pb-4">
            The coffee is brewed by first roasting the the first coffee beans
            over hot coals in a brazier. given an opportunity to sample
          </p>
          <div className="flex gap-4">
            <button className=" text-black border rounded-md p-3">
              TESTING COFFEE
            </button>
            <button className="text-white bg-amber-600 rounded-md p-3">
              READ MORE
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <img
            src="/images/coffee-white-remove.png"
            className="h-[400px] w-[500px] max-md:hidden"
            alt=""
          />
          <div className="flex max-md:hidden flex-col justify-end pb-16">
            <button className="p-3 border flex justify-center   rounded-full">
              <IoIosPlay />
            </button>
            <p className="text-xs">Play Video</p>
          </div>
        </div>
      </div>
      <div className="flex items-center max-md:justify-center px-12 justify-start flex-wrap gap-3 md:gap-0 md:overflow-hidden pb-5 ">
        <div className="items-center">
          <div className="flex pb-4 ">
            <p className="h-[1.4rem] w-48 text-center text-xs border rounded-md">1992</p>
            <div className="h-[0.7rem] w-16 bottom-1 border-b hidden md:block"></div>
          </div>
          <h2 className="text-sm font-bold pb-2">HOW WE STARTED</h2>
          <p className="text-[10px] max-w-44">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab
            aliquam labore illo iste.
          </p>
        </div>
        <div className="items-center">
          <div className="flex pb-4 ">
            <p className="h-[1.4rem] w-48 text-center text-xs border rounded-md ">1992</p>
            <div className="h-[0.7rem] w-16 bottom-1 border-b hidden md:block"></div>
          </div>
          <h2 className="text-sm font-bold pb-2">HOW WE STARTED</h2>
          <p className="text-[10px] max-w-44">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab
            aliquam labore illo iste.
          </p>
        </div>
        <div className="items-center">
          <div className="flex pb-4 ">
            <p className="h-[1.4rem] w-48 text-center text-xs border  rounded-md ">1992</p>
            <div className="h-[0.7rem] w-16 bottom-1 border-b hidden md:block"></div>
          </div>
          <h2 className="text-sm font-bold pb-2">HOW WE STARTED</h2>
          <p className="text-[10px] max-w-44 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab
            aliquam labore illo iste.
          </p>
        </div>
        <div className="items-center">
          <div className="flex pb-4 ">
            <p className="h-[1.4rem] w-48 text-center text-xs border  rounded-md ">1992</p>
            <div className="h-[0.7rem] w-16 bottom-1 border-b hidden md:block"></div>
          </div>
          <div>
          <h2 className="text-sm font-bold pb-2">HOW WE STARTED</h2>
          <p className="text-[10px] max-w-44 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab
            aliquam labore illo iste.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
