import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-[#081F45] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0 items-center justify-center text-white py-20">
          <div className="flex flex-col items-center lg:items-start">
            <img src="/images/logo.png" alt="" />
            <p>© Copyright 2023 Sellrs. <br /> All rights reserved.</p>
            <button className="hover:scale-110 my-3 font-bold transition duration-200 text-[#0D3473] flex items-center gap-2 py-2 px-6 border-[1px] bg-white border-[#0D3473] rounded-full w-32 ">
              <span><img src="/images/Icon.png" alt="" /></span>
              English
            </button>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <ul className=" flex flex-col gap-1">
              <li className="font-semibold cursor-pointer text-[#8CB3F2] pb-3 ">Company</li>
              <li className="cursor-pointer">Compare Deals</li>
              <li className="cursor-pointer">How It Works</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Referral Program</li>
              <li className="cursor-pointer">Community</li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
          <ul className=" flex flex-col gap-1">
              <li className="font-semibold cursor-pointer text-[#8CB3F2] pb-3 ">Legal</li>
              <li className="cursor-pointer">Legal Notice</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms of Use</li>
              <li className="cursor-pointer">DPA</li>
              <li className="cursor-pointer">DMCA Policy</li>
              <li className="cursor-pointer">ERDF Support</li>
            </ul>
            </div>
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-xl font-semibold pb-3 ">Follow us</h1>
            <div className="flex gap-4 to-white">
              <FaFacebook className="cursor-pointer" size='2em' />
              <FaTwitter className="cursor-pointer" size='2em'/>
              <FaInstagram className="cursor-pointer" size='2em'/>
              <FaLinkedin className="cursor-pointer" size='2em'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
