import React from 'react';

export default function Text() {
  return (
    <div className=' mx-36 '>

      <p id='welcoming' className={`font-rubik text-[45px] md:text-[60px] font-light`}>
        Welcome to the
      </p>
      <p id='welcoming' className={`font-rubik text-[45px] md:text-[60px] font-bold color-[#313E51]`}>
        Frontend Quiz!
      </p>
      <p id='welcoming' className="text-gray-500 italic my-10 font-rubik text-[20px]">
        Pick a subject to get started.
      </p>
    </div>
  );
}
