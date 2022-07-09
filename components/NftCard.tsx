interface Props {
  image: string;
}

export const NftCard = ({ image }: Props) => {
  return (
    <div className="border-2 min-h-[300px] sm:py-4 max-w-[250px] rounded-xl  sm:rounded-md ">
      <div className="sm:-right-8 sm:-top-[50px] relative  ">
        <img
          src={image}
          alt="title"
          className="rounded-t-xl sm:rounded-lg w-full "
        />
      </div>
      <div className="px-5 py-3 sm:py-0  sm:-mt-4">
        <h1 className="text-[30px] font-bold font-mono">Pandamania</h1>
        <div className="flex justify-between w-full mb-4 mt-2 px-3">
          <div className="flex items-center  text-xl">
          </div>
        </div>
      </div>
    </div>
  );
};
export const NftCardWithButton = ({ image }: Props) => {
  return (
    <div className="border-2 min-h-[430px] sm:py-4 my-10 rounded-xl  max-w-[350px]  sm:rounded-md ">
      <div className="sm:bg-black sm:px-3 sm:py-2 sm:-right-8 sm:-top-[50px] relative   ">
        <img src={image} alt="title" className="rounded-t-xl sm:rounded-none" />
      </div>
      <div className="px-6 sm:-mt-4 py-4 sm:py-0">
        <h1 className="text-[30px] font-bold font-mono">Pandamania</h1>
        <div className="flex justify-between w-full mb-4 mt-2 px-3">
          <div className="flex items-center  text-xl">
            
           
          </div>
          <h1 className="text-xl font-mono"> </h1>
        </div>
       
         
      </div>
    </div>
  );
};

