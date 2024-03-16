import React from 'react'

const Apple = () => {
  return (
    <div className='my-12 '>
      <div className='bg-[#FAFCFE] border-2 border-[#afccea] rounded-2xl pt-20 pb-10 px-16'>
      <div className='relative flex flex-col items-center justify-center '>
        <img className=' w-full lg:w-1/2 px-6 lg:px-0' src="/images/apple.png" alt="" />
        <img className=' w-full lg:w-1/2 px-6 lg:px-0 absolute top-0' src="/images/layer.png" alt="" />
      </div>
      <div>
      <div className="flex flex-col pt-16 z-30 text-center ">
            <h2 className="text-[#E88C30] text-[14px] uppercase font-semibold ">
            PARTNERSHIPS
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#0D3473] font-bold tracking-tighter py-3">
            Join Hands with Sellrs
            </h1>
            <p className="text-xl lg:text-2xl text-[#0D3473] tracking-wide leading-6 sm:leading-none">
            Passionate about electronics and innovation? Let's explore new horizons together.
            </p>
            <div className="flex text-center justify-center mt-4">
            <button className="hover:scale-110 font-bold transition duration-150 text-[#0D3473] py-2 px-8 border-[1px] border-[#0D3473] rounded-full w-">
            Contact us &#129062;
            </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Apple
