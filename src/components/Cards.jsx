import React from "react";

const Cards = () => {
  return (
    <>
     <div>
      {/* Text  */}
      <div className="flex flex-col items-center text-center my-40 justify-center">
      <h2 className='text-[#E88C30] text-[14px] uppercase font-semibold '>why SELLRS</h2>
      <h1 className='text-5xl md:text-6xl lg:text-7xl text-[#0D3473] font-bold mb-8 tracking-tighter'>A catchy heading that brings some <br /> interest to visitors</h1>
      </div>
      
      {/* Cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card 1 */}
        <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector1.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Global Expertise</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
         {/* card 2 */}
         <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector2.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Timely Updates</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
         {/* card 3 */}
         <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector3.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Secure Transactions</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
         {/* card 4 */}
         <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector4.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Sellrs Community</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
         {/* card 5 */}
         <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector5.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Seamless Experience</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
         {/* card 6 */}
         <div className="flex flex-col items-center text-center md:text-start md:items-start">
          <img src="/images/vector6.png" alt="" />
          <h1 className="text-3xl text-[#0D3473] font-bold py-2">Award-Winning Service</h1>
          <p className="text-[#0D3473] ">Harnessing insights from tech markets across the <br /> globe, we fine-tune our services to offer you a <br /> tailored and world-class experience.</p>
        </div>
      </div>
     </div>
    </>
  );
};

export default Cards;
