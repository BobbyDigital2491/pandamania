import React from "react";
import AboutSection from "../components/AboutSection";
import Community from "../components/Community";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Last from "../components/Last";
import MarketPlace from "../components/MarketPlace";
import NavComponent from "../components/NavComponent";


const NftCard = () => {
  return (
    <div className="border-2 min-h-[400px] py-4 max-w-[330px]">
      <div className="relative -right-6 -top-10">
        <img src="/Rectangle9.png" />
      </div>
      <div className="px-6 -mt-4">
        <h1 className="text-2xl">Pandamania</h1>
        <div className="flex justify-between w-full mb-4 mt-2 px-3">
          <div className="flex items-center  text-xl">
            
            <h1 className="pl-2 ">10000 HBAR</h1>
          </div>
          <h1 className="text-xl">16 tokens</h1>
        </div>
        <div className="flex justify-between">
         

         
        </div>
      </div>
    </div>
  );
};

export default function contact() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>

      <NavComponent />
      
      <Last/>
      
      <Footer />
    </>
  );
}
