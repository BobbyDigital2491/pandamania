import Link from "next/link";
import { NftCard } from "./NftCard";
import { Von } from "./Von";
import { Cel } from "./Cel";
import { KftCard } from "./KftCard";

export default function Gang() {
  return (
    <>
    <br/>
    <section className="">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
  
  <img src="new.png" width="700" height="700" className="align-center"/>
              <h1 className="text-5xl font-bold leading-none text-center">Pandamania Spaces</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center">Real time video chat conference built for Pandamania
              <br/>
              <br/>
              <a href="https://panda-spaces.vercel.app/preview/63b77e80ae90a28eb166791b/host"><button className="my-2 mr-3 h-[50px] w-[200px] rounded-xl bg-[#ff00dd] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Join as Host<br/> Room 1
            </button></a>
            <a href="https://panda-spaces.vercel.app/preview/63b77e80ae90a28eb166791b/guest"><button className="my-2 mx-3 h-[50px] w-[200px] rounded-xl bg-[#00d9ff] text-xl text-[#0b020a] sm:h-[62px] sm:w-[250px]">
              Join as Guest<br/> Room 1
            </button></a>
            <br/>
            <a href="https://panda-spaces.vercel.app/preview/63b7866eae90a28eb166791c/host"><button className="my-2 mr-3 h-[50px] w-[200px] rounded-xl bg-[#ff00dd] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Join as Host<br/> Room 2
            </button></a>
            <a href="https://panda-spaces.vercel.app/preview/63b7866eae90a28eb166791c/guest"><button className="my-2 mx-3 h-[50px] w-[200px] rounded-xl bg-[#00d9ff] text-xl text-[#0b020a] sm:h-[62px] sm:w-[250px]">
              Join as Guest<br/> Room 2
            </button></a>
            <br/>
            <a href="https://panda-spaces.vercel.app/preview/63b786bfae90a28eb166791d/host"><button className="my-2 mr-3 h-[50px] w-[200px] rounded-xl bg-[#ff00dd] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Join as Host<br/> Room 3
            </button></a>
            <a href="https://panda-spaces.vercel.app/preview/63b786bfae90a28eb166791d/guest"><button className="my-2 mx-3 h-[50px] w-[200px] rounded-xl bg-[#00d9ff] text-xl text-[#0b020a] sm:h-[62px] sm:w-[250px]">
              Join as Guest<br/> Room 3
            </button></a>
              </p>
      </div>
    </section>
  </>
  );
}
