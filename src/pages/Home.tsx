import React from "react";
import Navbar from "../components/elements/Navbar";
import Sidebar from "../components/elements/Sidebar";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#EDEDED] p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
