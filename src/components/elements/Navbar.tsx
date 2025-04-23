import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#32479c]">
      <div className="mx-auto px-1 md:px-4">
        <div className="relative flex h-16 items-center justify-between">
        
          <Link to={"/"} className="flex flex-1 items-center justify-start ">
            <div className="flex gap-4 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <div className="text-white font-bold text-base md:text-2xl">帝京安積高等学校</div>
            </div>
          </Link>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative flex gap-2 items-center rounded-full bg-white py-2 px-4 text-[#32479c] hover:text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none cursor-pointer"
            >
              <FaBell />
              <span className="hidden md:block">お知らせ</span>
              
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
