
export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            Pandamania.
          </h1>

          <h1 className="text-4xl font-semibold flex flex-col my-4 ">
            Created By Sokoni.
          </h1>
          <p className="max-w-lg ">
           You have now entered Pandamania, there is no turning back now. We the "Pandamanians" have one goal, and that is to bring justice 
            to the Hedera community. You may have rights, but is it Panda Syndicates rights? Do you breathe every breath for this moment? Are you 
            excited as we are to lay down the law, and bring order? We are the Pandamania collections. Our goal is to bring high quality, fun, 
            collectibles, and one of a kind NFTs to the community. With each series we will unlock the door to new possibilities, growth, and benefits 
            to our holders as we go along. As the project grows we will continue to keep all matters transparent as possible with our collectors.{" "}
          </p>
          <div className="flex  items-center sm:justify-center mt-10 sm:m-0 lg:justify-start ">
            <>
              <button className=" flex flex-col justify-start ml-5  text-lg font-bold rounded  text-white ">
                Powered By
                <img src="logo-black1.png" />
              </button>
            </>
            <>
              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Discover More <img src="arrow.svg" className="pl-2" />
              </button>
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:absolute xl:top-16 right-0">
          <img src="image5.png" className="object-fit h-full" />
        </div>
      </div>
    </div>
  );
}
