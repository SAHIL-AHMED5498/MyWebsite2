import { useState } from "react";

const Card = () => {


  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full h-screen p-10'>
    <div className=" w-fit rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-gray-800">
      <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Writes Upside-Down
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    
    </div>
    </div>
  );
};

export default Card;
