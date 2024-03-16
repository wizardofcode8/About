import React from "react";

const LandingData = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:item gap-5 mt-52 mb-24 px-5 sm:px-0">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        {/* left box 1 */}
        <div className="flex justify-between gap-5 bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl ">
          <div className="flex ps-5 py-8 flex-col">
            <h2 className="text-[#E88C30] text-[14px] uppercase font-semibold ">
              our specialty
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl mb-3 text-[#0D3473] font-bold tracking-tighter py-3">
              Electronics <br /> expertise.
            </h1>
            <p className="text-xl lg:text-2xl text-[#0D3473] tracking-wide leading-6 sm:leading-none">
              From phones to wearables, <br /> we've got you covered.
            </p>
          </div>
          <div className="">
            <img src="/images/phone.png" alt="" />
          </div>
        </div>
        {/* left box 2 */}
        <div className="flex justify-between bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl">
          <div className="flex flex-col ps-5 py-8 z-30 ">
            <h2 className="text-[#E88C30] text-[14px] uppercase font-semibold ">
              KNOWLEDGE
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#0D3473] font-bold tracking-tighter py-3">
              In-depth <br /> guides & <br /> reviews.
            </h1>
            <p className="text-xl lg:text-2xl text-[#0D3473] tracking-wide leading-6 sm:leading-none">
              Your decision-making <br /> process, simplified.
            </p>
          </div>
          <div className="relative flex justify-center pt-9">
            <div className="absolute hidden md:flex w-full z-10  top-16 right-32">
              <img src="/images/card2.png" alt="" />
            </div>
            <div className="z-20">
              <img src="/images/card1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Right Box  */}
      <div className="w-full lg:w-1/2 ">
        <div className="bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl p-5 md:p-3 lg:p-6">
          {/* products section  */}
          <div className="flex flex-col gap-3">
            {/* first product  */}
            <div className=" product-container cursor-pointer  flex flex-col md:flex-row items-center justify-around lg:gap-16 bg-[#FFFFFF] py-4 px-5 border-[1px] border-[#D1E1FA] rounded-2xl">
              <img src="/images/phone2.png" alt="" />
              <div className="text-[#081F45] text-center ">
                <h1 className="text-3xl font-bold ">Apple Watch </h1>
                <p className="text-xl md:text-lg xl:text-xl">
                  with dual-frequency
                </p>
              </div>
              <div className="flex 2xl:flex-row flex-col gap-4">
                <h1 className="text-4xl text-[#EB9947] font-extrabold ">
                  €500
                </h1>
                <button className="py-3 px-5 text-white bg-[#EB9947] rounded-xl text-sm lg:text-xs">
                  Sell now
                </button>
              </div>
            </div>
            {/* second product  */}
            <div className=" product-container cursor-pointer  flex flex-col md:flex-row items-center justify-around lg:gap-16  py-4 px-5 border-[1px] border-[#D1E1FA] rounded-2xl">
              <img src="/images/watch.png" alt="" />
              <div className="text-[#081F45] text-center ">
                <h1 className="text-3xl font-bold ">Apple Watch </h1>
                <p className="text-xl md:text-lg xl:text-xl">
                  with dual-frequency
                </p>
              </div>
              <div className="flex 2xl:flex-row flex-col gap-4">
                <h1 className="text-4xl text-[#EB9947] font-extrabold ">
                  €500
                </h1>
                <button className="py-3 px-5 text-white bg-[#EB9947] rounded-xl text-sm lg:text-xs">
                  Sell now
                </button>
              </div>
            </div>
            {/* Third product  */}
            <div className=" product-container cursor-pointer  flex flex-col md:flex-row items-center justify-around lg:gap-16 bg-[#FFFFFF] py-4 px-5 border-[1px] border-[#D1E1FA] rounded-2xl">
              <img src="/images/laptop.png" alt="" />
              <div className="text-[#081F45] text-center ">
                <h1 className="text-3xl font-bold ">Apple Watch </h1>
                <p className="text-xl md:text-lg xl:text-xl">
                  with dual-frequency
                </p>
              </div>
              <div className="flex 2xl:flex-row flex-col gap-4">
                <h1 className="text-4xl text-[#EB9947] font-extrabold ">
                  €500
                </h1>
                <button className="py-3 px-5 text-white bg-[#EB9947] rounded-xl text-sm lg:text-xs">
                  Sell now
                </button>
              </div>
            </div>
          </div>

          {/* text section  */}
          <div>
            <div className="flex flex-col ps-5 py-8 z-30 text-center ">
              <h2 className="text-[#E88C30] text-[14px] uppercase font-semibold ">
                WHAT WE OFFER
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#0D3473] font-bold tracking-tighter py-3">
                Your premium <br /> comparison tool.
              </h1>
              <p className="text-xl lg:text-2xl text-[#0D3473] tracking-wide leading-6 sm:leading-none">
                Find the best deals effortlessly.
              </p>
              <div className="flex text-center justify-center mt-4">
                <button className="hover:scale-110 font-bold transition duration-200 text-[#0D3473] flex items-center gap-2 py-2 px-6 border-[1px] border-[#0D3473] rounded-full w-32 ">
                  <span>
                    <img src="/images/Icon.png" alt="" />
                  </span>
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingData;
