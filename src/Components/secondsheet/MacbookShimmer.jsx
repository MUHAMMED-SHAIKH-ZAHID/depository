import React from 'react';

const MacbookShimmer = () => {
  return (
    <div className=" w-full h-full rounded-lg p-3 relative overflow-hidden ">
      <div className="bg-white  md:h-[65vh] h-[23vh] md:mx-16 mx-8 rounded md:border-8 border-4 border-black animate-pulse rounded-t-xl relative">
        <div className="absolute flex justify-center  w-full">
          <div className="md:w-24 w-10 md:h-2 h-1 bg-black"></div>
        </div>
        <div className="absolute text-black flex justify-center w-full h-full items-center animate-pulse">Loading...
        <span className='border-t-4 mr-5 border-blue-500 rounded-full w-5 h-5 border-solid animate-spin'></span></div>
      </div>
      <div className="bg-zinc-400 w-full md:h-10 h-3 relative rounded-full animate-pulse">
        <div className="absolute bottom-[-.3rem] left-[4rem] w-10 md:h-2 h-1 bg-zinc-500 rounded-b-xl"></div>
        <div className="absolute bottom-[-.3rem] right-[4rem] w-10 md:h-2 h-1 bg-zinc-500  rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default MacbookShimmer;
