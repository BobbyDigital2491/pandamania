import React from "react";
import AboutSection from "../components/AboutSection";
import Community from "../components/Community";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Like from "../components/Like";
import MarketPlace from "../components/MarketPlace";
import NavComponent from "../components/NavComponent";
import SEO from "../components/Seo";

const NftCard = () => {
  return (
    <div className="border-2 min-h-[400px] py-4 max-w-[330px]">
      <div className="relative -right-6 -top-10">
        <img src="/Rectangle9.png" />
      </div>
      <div className="px-6 -mt-4">
        <h1 className="text-2xl">Pandamania</h1>
        <div className="flex justify-between w-full mb-4 mt-2 px-3">
          <div className="flex items-center  text-xl">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.07486 12.5112C4.13309 12.4481 4.20345 12.3975 4.28173 12.3622C4.36001 12.327 4.4446 12.308 4.53042 12.3062H18.8442C18.9048 12.3071 18.9638 12.3254 19.0142 12.359C19.0646 12.3926 19.1042 12.44 19.1283 12.4956C19.1523 12.5512 19.1598 12.6126 19.1498 12.6723C19.1399 12.732 19.1128 12.7876 19.072 12.8324L16.038 16.2013C15.9797 16.2643 15.9094 16.315 15.8311 16.3502C15.7528 16.3855 15.6682 16.4045 15.5824 16.4063H1.25948C1.19891 16.4054 1.13989 16.3871 1.08949 16.3535C1.0391 16.3199 0.999495 16.2724 0.975433 16.2168C0.951371 16.1613 0.943879 16.0999 0.95386 16.0402C0.963841 15.9804 0.990869 15.9248 1.03169 15.8801L4.07486 12.5112ZM19.0857 9.7186C19.1265 9.76334 19.1535 9.81893 19.1635 9.87867C19.1735 9.93841 19.166 9.99976 19.1419 10.0553C19.1179 10.1109 19.0783 10.1584 19.0279 10.192C18.9775 10.2256 18.9185 10.2439 18.8579 10.2448L4.53953 10.2562C4.45371 10.2544 4.36912 10.2353 4.29084 10.2001C4.21256 10.1649 4.1422 10.1142 4.08397 10.0512L1.02714 6.69366C0.986314 6.64891 0.959286 6.59333 0.949305 6.53359C0.939324 6.47385 0.946815 6.41249 0.970877 6.35691C0.99494 6.30133 1.03455 6.25388 1.08494 6.22027C1.13533 6.18667 1.19436 6.16833 1.25492 6.16748L15.5733 6.15609C15.6591 6.15785 15.7437 6.17691 15.822 6.21213C15.9003 6.24736 15.9706 6.29802 16.0288 6.36109L19.0857 9.7186ZM4.07486 0.210985C4.13309 0.147915 4.20345 0.0972497 4.28173 0.0620237C4.36001 0.0267976 4.4446 0.00773618 4.53042 0.00598145L18.8533 0.0173705C18.9139 0.0182235 18.9729 0.0365554 19.0233 0.0701613C19.0737 0.103767 19.1133 0.151216 19.1374 0.2068C19.1614 0.262384 19.1689 0.323736 19.159 0.383477C19.149 0.443218 19.1219 0.498803 19.0811 0.543547L16.038 3.90105C15.9797 3.96412 15.9094 4.01479 15.8311 4.05001C15.7528 4.08524 15.6682 4.1043 15.5824 4.10605H1.25948C1.19891 4.1052 1.13989 4.08687 1.08949 4.05326C1.0391 4.01966 0.999495 3.97221 0.975433 3.91662C0.951371 3.86104 0.943879 3.79969 0.95386 3.73995C0.963841 3.68021 0.990869 3.62462 1.03169 3.57988L4.07486 0.210985Z"
                fill="white"
              />
            </svg>
            <h1 className="pl-2 ">10000 HBAR</h1>
          </div>
          <h1 className="text-xl">16 tokens</h1>
        </div>
        <div className="flex justify-between">
          <button className="border-[1px]  rounded-2xl flex px-[.6em] py-[.7em]  items-center ">
            <h1 className="font-bold">PLAY NOW</h1>
            <div className=" ml-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.53137 1.90942L14.2942 10.1141L1.53137 18.3188V1.90942Z"
                  stroke="white"
                  stroke-width="2.18792"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>

          <button className="buttons rounded-2xl flex px-[1.4em] py-[.7em]  items-center font-bold">
            BUY NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default function about() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>
      <SEO title={"Pandamania"} description={"Welcome to Pandamania"} image={"/panda3.png"} url={""} />

      <NavComponent />
      <section className="align-middle">
      <img src="map.jpg" className="center" width={50} height={50} />
      <br/>
      <h1 className="text-5xl font-bold leading-none text-center">Roadmap</h1>

      <br/>
		      <p className="pt-2 pb-8 text-xl font-medium text-center"> Welcome to Pandamania! We are a project dedicated to creating and distributing unique, one-of-a-kind NFTs. Our team is made up of creators, collectors, and enthusiasts who are passionate about bringing the world of NFTs to a wider audience.
<br/>
In 2023, we plan to expand our collection of Pandamania NFTs to include a wide range of styles and themes. We will also be hosting regular Pandamania Spaces, in our released real-time chat. Where our community can have the chance to come together and enjoy ourselves in a safe haven. It will also be available to projects within the ecosystem upon request. 
<br/>
In addition, we will also collaborate with talented artists from around the world to bring you even more unique panda NFTs, bringing forth Pandamania X (PMX). This collection and the transition to it will be the main focus of Q1 2023. 
<br/>
We are always looking for ways to improve and enhance our platform, and this year we plan to implement new business ideas for the longevity of the project. Creating a strong source of cash flow that doesn't require mints and secondary sales, although, they are encouraged as well.
<br/><br/>
We can't wait to see where Pandamania goes in this year, and we hope you'll join us on this exciting journey!
              
              <br/>
              <br/>
              <br/><br/>
              Q4 2021 - (ALL ACCOMPLISHED)✅
              <br/>
              Q1 2022 - (ALL ACCOMPLISHED)✅
              <br/>
              Q2 2022 - (ALL ACCOMPLISHED)✅
              <br/>
              Q3 2022 - (ALL ACCOMPLISHED)✅
              <br/>
              Q4 2022 - (ALL ACCOMPLISHED)✅
              <br/><br/>
              Q3 2022
              <br/>
              - Rebranding ✅
              <br/>
              - Staking and MNGO airdrops ✅
              <br/>
              - Panda Syndicates relaunch ✅
              <br/>
              - Hashmingos relaunch ✅
              <br/>
              - Lady Mingos claim ✅
              <br/>
              - $MNGO Wheel reconstruction into $MNGO Bust or Miss ✅
              <br/>
              - Hashmingos Burn to Enter Raffles ✅
              <br/>
              - $MNGO Discord Marketplace ✅
              <br/>
              - $MNGO Saucer Swap Listing ✅
              <br/>
              - Launch Mutant Pandas ✅
              <br/><br/>
              Q4 2022
              <br/>
              - HSUITE bonus staking rewards release ✅
              <br/>
              - 30 Custom Elite Mutant Pandas released ✅
              <br/>
              - Lock all $MNGO staking rewards services for a year ✅
              <br/>
              - Business collaboration with CS Transportation LLC✅
              <br/>
              - Trucking Plan Reveal ✅
              <br/>
              - Project hodlers benefits from Web 2 business reveal ✅
              <br/>
              - IRL Christmas toy giveaway✅
              <br/><br/>
              Q1 2023
              <br/>
              - Pandamania Spaces (RTC video conference)✅
              <br/>
              - 3rd $MNGO bust or miss event
              <br/>
              - Sharpen already established utilities
              <br/>
              - Introduction to Pandamania X
              <br/>
              - $MNGO Token Halving
              <br/>
              - Transition over to Pandamania X
              </p>
              
              
              </section>
      
      
      <Footer />
    </>
  );
}
