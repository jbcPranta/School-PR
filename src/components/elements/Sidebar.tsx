import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-2xl border-r border-gray-300 flex flex-col justify-between">
      <nav className="flex-1">
        <ul className=" ">
          <Link
            to="/"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            1年A組 山田太郎
          </Link>
          <Link
            to="/add-user"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            Add User
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            TOPページ
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            お支払い一覧
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            生徒情報登録
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            保護者情報修正
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            お知らせ一覧
          </Link>
          <Link
            to="/profile"
            className="block p-3 border-b border-gray-700 hover:bg-gray-300"
          >
            ROUTE CODE 登録
          </Link>
        </ul>
      </nav>


      <div className=" border-2 mx-4 mb-10 rounded-3xl border-amber-700">
        <Link
          to="/login"
          className="block text-center py-3 rounded-3xl hover:bg-gray-300 text-amber-700"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
