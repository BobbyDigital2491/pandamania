import React from "react";

const data = [
  {
    title: "01/",
    description:
      "Auction and raffles for NFTs and “other things” using $MNGO only being held in our discord.",
  },
  {
    title: "02/",
    description:
      "$MNGO Mystery Wheel is being reconstructed into $MNGO Bust or Miss. This will allow holders to pay XXXX amount $MNGO for a chance to win NFT worth 0-3000h. ",
  },
  {
    title: "03/",
    description:
      "$MNGO Marketplace is a marketplace within discord for holders that sales them NFTs at a 10-20% discount using $MNGO. ",
  },
  {
    title: "04/",
    description:
      "Saucer Swap listing. $MNGO will be listed onto Saucer Swap defi platform to allow our holders to trade $MNGO freely. ",
  },
  {
    title: "05/",
    description:
      "$MNGO will be used in mints and claiming other NFTs, including claiming a percentage of Mutant Pandas for $MNGO. ",
  },
  {
    title: "06/",
    description:
      "$MNGO token games. We have partnered with Creamies NFT team to bring token games to $MNGO. ",
  },
];

export default function Community() {
  return (
    <div className="my-[10rem]">
      <div className="absolute  -z-10 right-0  top-[280vh]">
        <img src="Ellipse18.svg" className="relative " />
      </div>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-5xl sm:text-[80px] flex flex-col align-middle ">
          $MNGO <span> Hodlers Utilities</span>{" "}
        </h1>
        <div className="flex flex-wrap   justify-center  items-center">
          {data.map((n, index) => {
            return (
              <div key={index} className="flex flex-col max-w-sm p-5">
                <h1 className="text-[60px] font-mono">{n.title}</h1>
                <p>{n.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
