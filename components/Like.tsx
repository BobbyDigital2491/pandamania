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
           You have now entered Pandamania, there is no turning back now. We the "Pandamanians" have one goal, and that is to bring justice 
            to the Hedera community. You may have rights, but is it Panda Syndicates rights? Do you breathe every breath for this moment? Are you 
            excited as we are to lay down the law, and bring order? We are the Pandamania collections. Our goal is to bring high quality, fun, 
            collectibles, and one of a kind NFTs to the community. With each series we will unlock the door to new possibilities, growth, and benefits 
            to our holders as we go along. As the project grows we will continue to keep all matters transparent as possible with our collectors.{" "}
          </p>

        </div>
        
          <img src="map.jpg"  width='600'  />
       
      </div>
    </div>
  );
}
