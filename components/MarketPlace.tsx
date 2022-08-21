import React from "react";
import { HftCard } from "./NftCard";
import { XftCard } from "./XftCard";
import { ZftCard } from "./ZftCard";
import { RftCard } from "./RftCard";



export default function MarketPlace() {
  return (
    <>
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="p-6 xl:col-span-3">
              <div className="grid md:grid-cols-2">
                <div className="grid content-center ml-[3vw] relative -mt-[10rem]">
                  <div className="py-10">
                    <XftCard image="crown.png" />
                  </div>
                  <div className="py-10">
                    <ZftCard image="guns.png" />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <RftCard image="lady.png" />
                  </div>
                  <div className="py-10">
                    <HftCard image="fish.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4  xl:col-span-2 text-left">
              <h2 className="text-5xl sm:text-[80px] font-bold">
                What is Pandamania?
              </h2>
              <p className="">
             Pandamania is a collection of NFT projects that is set to bring change to the digital and real world. 
            Providing value to the world around us and inspiring love and change for a better tomorrow. 
            Bringing value to our NFT holders and allowing them to use us to make a difference in the world. 
            We are love. We are hope. We are one. We are Pandamania. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
