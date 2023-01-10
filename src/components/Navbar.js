import React from "react";
import logo from "../images/me.svg";
import minilogo from "../images/minime.svg";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full text-gray-200 z-10 fixed bg-violet-950">
      <div className="w-[225px] h-20">
        <div className="mt-[25px] pl-10">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="ml-8 w-[160px] h-10 rounded self-center  bg-violet-950 outline outline-1 outline-violet-800/[.4]">
        <button>
          <div className="flex">
            <div className="ml-[12px] mt-[10px] w-[22px]">
              <img src={minilogo} alt="Logo" width="20" />
            </div>
            <div className="text-sm w-[65px] mt-[10px] ml-2">All chains</div>
            <div className="text-sm w-[20px] mt-[14px] ml-[20px]">
              <SlArrowDown />
            </div>
          </div>
        </button>
      </div>
      <div className="ml-[360px] w-[550px] h-10 rounded-full bg-violet-800/[.15] self-center">
        <div className="mt-2 ml-[10px]">
          <CiSearch size={25} />
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 ml-8 w-[150px] h-10 rounded bg-violet-950 mt-[20px] mr-6 outline outline-2 outline-pink-600">
        <div className="flex">
          <div className="mt-[10px] pl-[10px]">
            <AiOutlineUser size={20} className="text-pink-600" />
          </div>
          <div className="text-sm mt-[10px] pl-2">Connect Wallet</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
