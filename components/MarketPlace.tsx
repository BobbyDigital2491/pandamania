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
                    <NftCard image="pan32.png" />
                  </div>
                  <div className="py-10">
                    <NftCard image="cel.jpg" />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <NftCard image="lazy.jpg" />
                  </div>
                  <div className="py-10">
                    <NftCard image="gold.jpeg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4  xl:col-span-2 text-left">
              <h2 className="text-5xl sm:text-[80px] font-bold">
                Built on Hedera
              </h2>
              <p className="">
              We are stout supporters of the Hedera network for several reasons. Reasons include the nominal fees associated with the minting and transferring of NFTs, speed of token transfers, security of the network and more. They allow NFTs to become more accessible to a broader audience. The Hedera community’s love and support is unmatched. Panda Syndicates originally started on ETH before two Hbarbarians got the artist to see the wonders of the Hedera community.
              </p>

              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Visit Hedera <img src="arrow.svg" className="pl-2" /> <link href="https://hedera.com/"></link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
