import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-24 md pt-10 justify-center">
        <div className="pb-8 max-sm:pl-4 relative">
          <img src="/images/coffee-babe.png" className="w-[300px] z-10 h-[300px]  object-cover egg-shape"  alt="profile" />
          <img src="/images/coffee-peofile.png" className="h-[100px] bottom-6 right-48 z-20 w-[200px]  absolute" alt="" />
        </div>
        <div className="max-w-[400px] max-sm:max-w-[300px]">
          <h1 className="text-[9px] text-center mb-3 p-1 bg-amber-600 text-white w-16">ABOUT US</h1>
          <p className="font-bold text-2xl pb-3">ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</p>
          <p className="text-xs pb-2 text-stone-400">
            Whether you are in the mood for classic drip coffee or want to try
            one of our expresso drinks, our baristas have the expertise to
            create the perfect cup everytime. We offer a range of options to
            suit all tastes, from robust and bold to light and smooth{" "}
          </p>
          <p className="text-xs text-stone-400">
            we pride ourselves on using only the finest, sustainble sourced from
            around the world and roasting them inhouse to create our signature
            blend
          </p>
        </div>
      </div>
    </>
  );
}

export default About;


