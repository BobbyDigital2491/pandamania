import React from "react";

export default function HeroSection4() {
  return (
    <div className="Readex px-3">
      
      <div className="container mx-auto flex h-screen flex-wrap items-center justify-around">
        <div className="flex max-w-xl flex-col  items-start justify-start text-left">
          <h1 className="text-5xl sm:text-[80px] font-bold">Pandamania Spaces</h1>
          <p className="my-4 max-w-lg text-lg ">
            Pandamania Spaces is a Real time chat conference platform. Built for Pandamania. 
          </p>
          <div className="flex items-start justify-start px-5">
            <a href="https://web-3-factory.vercel.app/preview/638cf929ea4ced3e8758b790/host"><button className="my-2 mr-3 h-[50px] w-[200px] rounded-xl bg-[#ff00dd] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Join as Host
            </button></a>
            <a href="https://web-3-factory.vercel.app/preview/638cf929ea4ced3e8758b790/guest"><button className="my-2 mx-3 h-[50px] w-[200px] rounded-xl bg-[#00d9ff] text-xl text-[#0b020a] sm:h-[62px] sm:w-[250px]">
              Join as Guest
            </button></a>
            
          </div>
        </div>
        <div>
          <img src="new.png" width="400" height="900" alt="nft" />
        </div>
        
      </div>
    </div>
  );
}