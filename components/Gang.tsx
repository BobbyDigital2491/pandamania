import Link from "next/link";


export default function Gang() {
  return (
    <>
    <br/>
    <section className="">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
  
  <img src="22.png" width="900" height="400" className="align-center"/>
  <h1 className="text-5xl font-bold leading-none text-center">Change is here!!!</h1>

	<p className="pt-2 pb-8 text-xl font-medium text-center">
    	 Something is happening within Pandamania. Things seem to be evolving and its world has turned 
	 into the survival of the fittest. No one can say whether this change is good or bad, only 
	 one thing for certain... Nothing will ever be the same. Welcome to Pandamania X!
		</p>
		<br/>
		<h1 className="text-3xl font-bold leading-none text-center">PMX Gaming</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center">
			Pandamania has accomplished everything on thier previous roadmap and now they're on to 
			something new. A new journey that is exciting, fun and introduces even better hodler rewards.
			PMX Gaming is the new focus for Pandamania! Please check out our execution plan to learn more.
			<br/><br/>
			<p className="pt-2 pb-8 text-xl font-medium text-center underline underline-offset-8">
			Click The Following Link For More Information
			
			</p>
			<a href="https://docs.google.com/presentation/d/1L-lfoBEI4g52WdG1JquwUlSPTV0WKs9L02uwxyDei7k/edit?usp=sharing"
		   className="text-xl leading-none text-center hover:bg-purple-700 ">
			PMX Gaming Execution Plan
			</a>
			</p>
		
	   		 <br/><br/>
	    </div>
	   
    </section>



    
  </>
  );
}
