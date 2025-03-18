import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBusSimple, FaHeadSideVirus, FaDatabase } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineCurrencyYen } from "react-icons/hi2";
import { ImExit, ImFolderOpen } from "react-icons/im";
import {
  IoMdArrowDropright,
  IoMdArrowDropdown,
  IoIosArrowForward,
} from "react-icons/io";
import { RiUserFill } from "react-icons/ri";

const Sidebar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <div className="h-screen w-64 bg-[#32479C] shadow-2xl border-t-2 border-amber-50 flex text-amber-50">
      <nav className="flex-1">
        <ul className="cursor-pointer">
          {/* Event Management */}
          <Link
            to="/event-list"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <FaBusSimple className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">イベント管理</div>
          </Link>

          {/* Announcements */}
          <Link
            to="/announcement-list"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <FaInfoCircle className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">お知らせ</div>
          </Link>

          {/* Income List */}
          <Link
            to="/income-list"
            className="pl-2.5 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <HiOutlineCurrencyYen className="text-amber-50 text-3xl" />
            <div className="p-3 font-bold text-base">収入一覧</div>
          </Link>

          {/* Unpaid List */}
          <Link
            to="/unpaid-list"
            className="pl-2.5 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <HiOutlineCurrencyYen className="text-amber-50 text-3xl" />
            <div className="p-3 font-bold text-base">未入金一覧</div>
          </Link>

          {/* Documents List */}
          <Link
            to="/doc-list"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <ImFolderOpen className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">資料管理</div>
          </Link>

          {/* User List */}
          <Link
            to="/user-list"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <FaHeadSideVirus className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">関係者管理</div>
          </Link>

          {/* Student List */}
          <Link
            to="/student-list"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <RiUserFill className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">生徒管理</div>
          </Link>

          {/* Student Management (Dropdown) */}
          <div
            onClick={handleDropdown} // Toggle Dropdown
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center cursor-pointer"
          >
            <FaDatabase className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base w-[80%] tex items-start">生徒管理</div>
            {dropdown ? (
              <IoMdArrowDropdown className="text-amber-50 text-2xl" />
            ) : (
              <IoMdArrowDropright className="text-amber-50 text-2xl" />
            )}
          </div>

          {/* Dropdown Menu*/}
          <div className={`${dropdown ? "block" : "hidden"} bg-[#32479C]`}>
            <Link
              to="/club-list"
              className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
            >
              <div className="p-3 font-bold text-base w-[90%]">クラブ管理</div>
              <IoIosArrowForward className="text-amber-50 text-xl mx-0" />
            </Link>
            <Link
              to="/class-list"
              className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
            >
              <div className="p-3 font-bold text-base w-[90%]">クラス管理</div>
              <IoIosArrowForward className="text-amber-50 text-xl mx-0" />
            </Link>
            <Link
              to="/expense-item-list"
              className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
            >
              <div className="p-3 font-bold text-base w-[90%]">費目設定</div>
              <IoIosArrowForward className="text-amber-50 text-xl mx-0" />
            </Link>
          </div>

          {/* Logout */}
          <Link
            to="/login"
            className="pl-3 border-b border-amber-50 hover:bg-[#2C3E70] flex items-center"
          >
            <ImExit className="text-amber-50 text-2xl" />
            <div className="p-3 font-bold text-base">ログアウト</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
