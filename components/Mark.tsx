import React from "react";
import { NftCard } from "./NftCard";

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
                    <NftCard image="crown.png" />
                  </div>
                  <div className="py-10">
                    <NftCard image="guns.png" />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <NftCard image="lady.png" />
                  </div>
                  <div className="py-10">
                    <NftCard image="fish.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4  xl:col-span-2 text-left">
              <h2 className="text-5xl sm:text-[80px] font-bold">
                What is $MNGO Token?
              </h2>
              <p className="">
                MNGO token is a fungible token built on Hedera with 50,000,000 supply. It is the token that represents the Pandamania Collections (Hashmingos,
                Lady Mingos, and Panda Syndicates) and used within its community. This  utility token offers different usages and activities that keeps
                the community engaged while rewarding them for being a supporter. Mingo’s World or Pandamania ecosystem is built around the usage of 
                MNGO and creating more and more ways to help maintain its importance and usage throughout the entire Hedera, including making important
                partnerships to take the token to the next level. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
