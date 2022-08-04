import Link from "next/link";

export default function Like() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            Roadmap.
          </h1>
          <br/>
          <p className="max-w-lg ">
           Q4 2021 
            - (ALL ACCOMPLISHED)
            Q1 2022
            - (ALL ACCOMPLISHED)
            Q2 2022
            - (ALL ACCOMPLISHED)
            Q3 2022
            - Rebranding ✅
            <br/>
            - Staking and MNGO airdrops ✅
            - Panda Syndicates relaunch ✅
            - Hashmingos relaunch ✅
            - Lady Mingos claim ✅
            - $MNGO Wheel reconstruction into $MNGO Bust or Miss
            - Burn 2000 Hashmingos (1600 currently)
            - Hashmingos Burn to Enter Raffles
            - $MNGO Discord Marketplace 
            - Launch $MNGO Buyback Program
            - Launch Mutant Pandas {" "}
          </p>

        </div>
        
          <img src="map.jpg"  width='600'  />
       
      </div>
    </div>
  );
}
