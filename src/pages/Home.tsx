import React, { useState } from "react";
import Navbar from "../components/elements/Navbar";
import Sidebar from "../components/elements/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex items-center bg-[#32479C] h-16">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={`md:hidden text-white text-2xl m-2 p-2 rounded-md ${showSidebar ? "focus:ring-2 focus:ring-white" : "focus:outline-none"} `}
          type="button"
          aria-label="Toggle Sidebar"
          title="Toggle Sidebar"
        >
          <GiHamburgerMenu />
        </button>
        <div className="flex-1">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar (Fixed Width When Open, Hidden on Small Screens) */}
        <div
          className={`absolute md:relative bg-white h-full shadow-lg transition-all duration-300 ${
            showSidebar ? "w-64" : "w-0 md:w-64"
          } overflow-hidden`}
        >
          <Sidebar />
        </div>

        {/* Content (Takes Remaining Space) */}
        <div
          className={`bg-[#EDEDED] p-10 overflow-y-auto h-screen transition-all duration-300 flex-1 ${
            showSidebar ? "ml-64 md:ml-0" : "ml-0"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
