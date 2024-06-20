import React from "react";

function Grade() {
  return (
    <div>
      <div className="text-center items-center px-20 gap-5 flex  flex-col">
        <p className="text-[10px] p-1 rounded-md bg-amber-500 text-white">TOP GRADE</p>
        <p className="font-bold text-3xl pb-4">WORLD TOP GRADE</p>
        <div className="flex justify-center items-center max-md:flex-wrap gap-12">
          <div className="flex flex-col relative justify-center gap-y-3 items-center">
            <p className="bg-white p-2 rounded-full absolute h-[2rem] top-1 left-12 right- text-center text-xs w-[2rem]">
              01
            </p>
            <img
              src="/images/white-beans.jpeg"
              className="h-[100px] w-[100px] rounded-full"
              alt=""
            />
            <h1 className="font-bold">AMERICANO GRADE</h1>
            <p className="text-[10px] w-40">
              Lorem ipsum dolor sit, amet consectetur adipisicing elite.
            </p>
          </div>
          <div className="flex flex-col relative justify-center gap-y-4 mb-28 max-md:mb-0 items-center">
            <p className="bg-white p-2 rounded-full absolute h-[2rem] top-1 left-12 right- text-center text-xs w-[2rem]">
              02
            </p>
            <img
              src="/images/black-beans.jpeg"
              className="h-[100px] w-[100px] rounded-full"
              alt=""
            />
            <h1 className="font-bold">AMERICANO GRADE</h1>
            <p className="text-[10px] w-40">
              Lorem ipsum dolor sit, amet consectetur adipisicing elite.
            </p>
          </div>
          <div className="flex flex-col relative justify-center gap-y-4 items-center">
            <p className="bg-white p-2 rounded-full absolute h-[2rem] top-1 left-12 right- text-center text-xs w-[2rem]">
              03
            </p>
            <img
              src="/images/green-beans.jpeg"
              className="h-[100px] w-[100px] rounded-full"
              alt=""
            />
            <h1 className="font-bold">AMERICANO GRADE</h1>
            <p className="text-[10px] w-40">
              Lorem ipsum dolor sit, amet consectetur adipisicing elite.
            </p>
          </div>
          <div className="flex flex-col relative justify-center gap-y-4 mb-28 max-md:mb-0 items-center">
            <p className="bg-white p-2 rounded-full absolute h-[2rem] top-1 left-12 right- text-center text-xs w-[2rem]">
              04
            </p>
            <img
              src="/images/nrown-beans.jpg"
              className="h-[100px] w-[100px] rounded-full"
              alt=""
            />
            <h1 className="font-bold">AMERICANO GRADE</h1>
            <p className="text-[10px] w-40">
              Lorem ipsum dolor sit, amet consectetur adipisicing elite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grade;
