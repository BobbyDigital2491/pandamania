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
               $MNGO Staking Rewards
              </h2>
              <p className="">
               We have partnered up with HbarSUITE to provide staking to our holders. Their are a team of developers that continues to bring value and 
              tools into Hedera’s ecosystem. They have set up a non custodial form of staking for our holders and rewards are issued weekly on 
              Sunday evening.
                <br/>

              <ul> $MNGO staking rates:
              - Hashmingos 20 $MNGO/ Weekly
              - Pandamanians 60 $MNGO/ Weekly
              - Lady Mingos 70 $MNGO/ Weekly
                </ul>

              As the project is expands we will we offer $MNGO into partnering projects community as well helping with the growth of $MNGO and partnering
              projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
