import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-8 flex-col  text-left px-2   ">
          <img src="new.png" />
          <h1 className="text-5xl sm:text-[80px]">Mission Statement</h1>
          <br/>
          <p className="max-w-lg text-xl ">
           The mission of this project is to promote quality art at an affordable
          price without straying away from the utilities and benefits of our
          holders. We will stay committed to bringing value to the project, by
          focusing on the short and long term goals. Preparing ourselves for
          long term stability with each short term success one step at a time.
          Pandamania’s collection consists of multiple projects that share the
          same common goal. These projects work as a bridge for each other as
          one focus on community development the other focus on project
          development. Allowing us to build in both areas effectively and set up
          a support even throughout a bear market. If conditions change, then
          the project adapts to the change and continue moving forward.{" "}
          </p>
          <div className="flex  items-center sm:justify-center mt-10 sm:m-0 lg:justify-start ">
            <>
              <button  className=" flex flex-col border-2 justify-start ml-5  text-lg font-bold rounded  text-white ">
                <link href='https://hedera.com/'/>
                <img src="hlogo.png" width='50' height='50' />
              </button>
            </>
            <>
              <button className="px-6 py-3  border-2 -translate-y+10 ml-8 my-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Discover More <img src="arrow.svg" className="pl-2" />
              </button>
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:fit xl:top-16 right-0">
          
        </div>
      </div>
    </div>
  );
}
