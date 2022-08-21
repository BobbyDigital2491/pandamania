import Link from "next/link";

export default function Like() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            Mutant Pandas
          </h1>
          <br/>
          <p className="max-w-lg ">
           Mutants will introduce a new era for NFTs, it is a true form of bridging the gap between Web 2 and Web 3!
            The Mutant Pandas will solve issues that nearly 98% of NFT projects will continue to face, even now majority are facing this issue, 
            "How to maintain consistent cash flow for stable project growth?" Mutants will introduce Hedera ecosystem into a way of combining real world 
            businesses with digital projects without straying away from the quality of each! 
          </p>

        </div>
        
          <img src="mtpan.png"  width='600'  />
       
      </div>
    </div>
  );
}
