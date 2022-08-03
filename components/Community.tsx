import React from "react";

const data = [
  {
    title: "01/",
    description:
      "Stay consistent and never get uncomfortable. Build when everyone is asleep. Never be afraid to adapt to change when needed.",
  },
  {
    title: "02/",
    description:
      "Full transparancy and community engagement when developing and deploying new projects. ",
  },
  {
    title: "03/",
    description:
      "Full community engagement complete with raffles, giveaways and airdrops .",
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
          Community <span>Engagement</span>{" "}
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
