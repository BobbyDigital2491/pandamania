import React from "react";

export default function AboutSection() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center px-10 flex-wrap">
        <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">What is Pandamania?</h1>
          <br/>
          <p className="text-xl">
            Pandamania is a collection of NFT projects that is set to bring change to the digital and real world. 
            Providing value to the world around us and inspiring love and change for a better tomorrow. 
            Bringing value to our NFT holders and allowing them to use us to make a difference in the world. 
            We are love. We are hope. We are one. We are Pandamania.
          </p>
        </div>
        < >
        <img src="panda.png" width='150' />
          <br/>
          <br/>
          <div className="absolute  -z-10 right-0   ">
            <img src="Ellipse21.svg" className="h-[60rem]" />
          </div>
        </>
      </div>
    </div>
  );
}
