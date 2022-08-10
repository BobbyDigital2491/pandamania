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
      "Sacrifice when needed in order to bring constant value to holders. Constantly innovating for the greater good of the project .",
  },
  {
    title: "04/",
    description:
      "Sacrifice when needed in order to bring constant value to holders. Constantly innovating for the greater good of the project .",
  },
  {
    title: "05/",
    description:
      "Sacrifice when needed in order to bring constant value to holders. Constantly innovating for the greater good of the project .",
  },
  {
    title: "06/",
    description:
      "Sacrifice when needed in order to bring constant value to holders. Constantly innovating for the greater good of the project .",
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
          $MNGO <span>Utilities</span>{" "}
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
