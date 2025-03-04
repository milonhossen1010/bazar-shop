import { FaSpinner } from "react-icons/fa";

 

export default function FullScreenLoading  ()  {
  return (
    <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
       <FaSpinner className="animate-spin text-skyText text-5xl"  />
      <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p>
    </div>
  );
};

 
