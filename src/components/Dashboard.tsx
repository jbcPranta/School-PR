import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className=" flex">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-8">
        Dashboard
      </button>
      <Link to="/react/change-password">
        <button className="bg-amber-300 text-black py-2 px-4 rounded cursor-pointer">
          Change Password
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
