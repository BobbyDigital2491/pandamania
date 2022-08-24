import React from "react";
import { DftCardWithButton } from "./DftCard";

const data = [
  {
    image: "head.jpeg",
  },
  {
    image: "next.jpeg",
  },
  {
    image: "gold.jpeg",
  },
  

];

export default function Discover() {
  return (
    <div className="flex flex-col my-10  px-10 ">
      <div className="flex py-10 ">
        <h1 className="text-5xl sm:text-[80px]">Our Collection</h1>
      </div>
      <div className="flex flex-wrap justify-between  items-center ">
        {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}

        {data.map((n, index) => {
          return  <DftCardWithButton image={n.image} key={index} />;
        })}
      </div>
    </div>
  );
}
