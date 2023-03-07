import React from "react";
import { NftCard } from "./NftCard";
import { MftCard } from "./MftCard";

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
                    <MftCard image="mtpan.png" />
                  </div>
                  <div className="py-10">
                    <MftCard image="cow.png" />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <MftCard image="punk.png" />
                  </div>
                  <div className="py-10">
                    <MftCard image="dead.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4  xl:col-span-2 text-left">
              
            
              <h2 className="text-5xl sm:text-[80px] font-bold">
               $MNGO Staking Rewards & Halving
              </h2>
              <p className="">
              On January 15th, 2023 $MNGO halving process goes into effect.
               This will help reduce the amount of $MNGO that is being distributed weekly. 
               Also decreases the selling pressure our token faces on Saucerswap, upholding its 
               value longer. In Q2 we will start to gradually buy back $MNGO, as we reach the 
               targeted distribution amount. 
                <br/><br/>
              Notable Changes:
                <br/>
                <br/>
              <ul>
                <li>Jan 15th, 2023</li> 
              <li>- Hashmingos 20 MNGO weekly into 10 MNGO weekly</li>
              <li>- Lady Mingos 70 MNGO weekly into 35 MNGO weekly</li>
              <li>- Panda Syndicates 60 MNGO weekly into 30 MNGO weekly</li>
              <li>- Mutant Panda Pandas 77 MNGO weekly into 50 MNGO weekly (multiplers)</li>
                </ul>
                <br/>
              <ul>
                <li>Feb 19th, 2023</li> 
              <li>- Hashmingos 10 MNGO weekly into 5 MNGO weekly</li>
              <li>- Lady Mingos 35 MNGO weekly into 20 MNGO weekly</li>
              <li>- Panda Syndicates 30 MNGO weekly into 20 MNGO weekly</li>
              <li>- Mutant Panda 50 MNGO weekly into 40 MNGO weekly (multipliers)</li>
                </ul>
                <br/>
              <ul>
                <li>March 19th, 2023 - Final Rates</li> 
              <li>- Hashmingos 5 MNGO weekly into final 0 MNGO weekly</li>
              <li>- Lady Mingos 20 MNGO weekly into final 0 MNGO weekly</li>
              <li>- Panda Syndicates final 10 MNGO weekly</li>
              <li>- Mutant Panda final 30 MNGO weekly (multipliers)</li>
                </ul>
              <br/>
              Note: With the new staking rewards plan we will reduce $MNGO distribrution by over 250k $MNGO weekly, 
              from 400k plus to under 150k $MNGO given out weekly.
              </p>
            </div>
            <img className="h-auto max-w-full mx-auto" src="/Final.png" alt="Final Staking Rewards"/>
          </div>
        </div>
      </section>
    </>
  );
}
