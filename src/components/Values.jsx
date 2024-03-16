import React from "react";

const Values = () => {
  return (
    <div className="my-12">
      {/* Heading  */}
      <div>
        <div className="flex flex-col items-center justify-center mt-44 mb-24 font-sans text-center">
          <h2 className="text-[#E88C30] text-[14px] uppercase font-semibold ">
            OUR VALUES
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#0D3473] font-bold mb-8 tracking-tighter">
            The Compass Behind <br className="hidden sm:flex" /> Our Journey
          </h1>
          <p className="text-xl lg:text-2xl text-[#0D3473] tracking-wide leading-6 sm:leading-none px-6 sm:px-0">
            Guided by core principles, we prioritize honesty, care for our
            users, <br className="hidden lg:flex" /> and sustainability at every
            turn.
          </p>
        </div>
      </div>
      {/* Cards  */}
      <div>
        <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-4 items-center  py-6">
          {/* Box 1  */}
          <div className="flex flex-col items-center p-8 bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl ">
            <img src="/images/transparency.png" alt="" />
            <div >
              <h1 className="text-[28px] font-bold text-[#0D3473] ">
                Transparency
              </h1>
              <p className="text-[#0D3473] ">
                Providing clear insights, so <br /> you’ll know what to expect.
              </p>
            </div>
          </div>
          {/* Box 2  */}
          <div className="flex flex-col items-center p-8 bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl ">
            <img  src="/images/integrity.png" alt="" />
            <div>
              <h1 className="text-[28px] font-bold text-[#0D3473] ">
                Transparency
              </h1>
              <p className="text-[#0D3473] ">
                Providing clear insights, so <br /> you’ll know what to expect.
              </p>
            </div>
          </div>
          {/* Box 3  */}
          <div className="flex flex-col items-center p-8 bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl ">
            <img  src="/images/customer.png" alt="" />
            <div >
              <h1 className="text-[28px] font-bold text-[#0D3473] ">
                Transparency
              </h1>
              <p className="text-[#0D3473] ">
                Providing clear insights, so <br /> you’ll know what to expect.
              </p>
            </div>
          </div>
          {/* Box 4  */}
          <div className="flex flex-col items-center p-8 bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl ">
            <img  src="/images/sustainability.png" alt="" />
            <div >
              <h1 className="text-[28px] font-bold text-[#0D3473] ">
                Transparency
              </h1>
              <p className="text-[#0D3473] ">
                Providing clear insights, so <br /> you’ll know what to expect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
