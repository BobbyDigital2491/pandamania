import Link from "next/link";

export default function Last() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-10 flex-col    text-left px-2   ">
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
            Contact Us
          </h1>
          <br/>
          <h1 className="text-[55px] sm:text-[80px] font-bold leading-none ">
           <Link href='https://twitter.com/syndicatespanda'> Pandamania Twitter</Link>
          </h1>

        </div>
        
          <img src="panda.png"  width='600'  />
       
      </div>
    </div>
  );
}
