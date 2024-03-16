import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import Nevo from './Nevo';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar';




const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 ring-0 transition mt-2 backdrop-filter backdrop-blur-lg '>
        <ul className='text-center text-xl p-20'>
            <Link  to='/home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:font-bold hover:text-white hover:rounded-md cursor-pointer'>Blog</li>
            </Link>
            <Link  to='/home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:font-bold hover:text-white hover:rounded-md cursor-pointer'>FAQ</li>
            </Link>
        </ul>
    </div>
    </>
  return (
    <nav>
      <div className='h-[10vh] flex items-center px-4 py-2 z-50 text-[#0D3473]'>
        <div className='flex items-center gap-0 sm:gap-2 md:gap-12 2xl:gap-24 flex-1'>
         <img src="/images/logo.png" alt="" />
            <div className='hidden lg:flex'>
            <Dropdown/>
          </div>
          <div className='ps-4 md:ps-10 lg:ps-14 md:p-0'>
            <Searchbar/>
          </div>
        </div>
        <div className='md:flex flex-1 items-center justify-end font-normal hidden '>
           <div className='lg:flex hidden'>
           <ul className='flex items-center gap-8 mr-16 text-[20px] font-semibold'>
            <Link  to=''>
            <li className=' cursor-pointer'>Blog</li>
            </Link>
            <Link  to=''>
            <li className=' cursor-pointer'>FAQ</li>
            </Link>
            <Nevo/>
            </ul>
           </div>
        </div>

        <div> 
          {click && content}
        </div>

        <button className='block lg:hidden transition' onClick={handleClick}>
          {click ? <FaTimes/> : <RiMenu3Fill/>}
        </button>

      </div>
    </nav>
  )
}

export default Navbar
