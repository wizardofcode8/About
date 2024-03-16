import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <div className="relative inline-block text-left items-centerfont-sans font-semibold">
      <div className='flex text-center'>
        <button
          type="button"
          className="inline-flex text-[20px]  justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-[#0D3473]"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Category
          {isOpen ? <IoMdArrowDropup className="ml-1 rotate-180 text-xl font-bold " /> : <IoMdArrowDropup className="ml-1 text-xl font-bold" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#0D3473] hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => console.log('Item 1 clicked')}
            >
              Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#0D3473] hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => console.log('Item 2 clicked')}
            >
              Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#0D3473] hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => console.log('Item 3 clicked')}
            >
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default DropDown;
