import React from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit, MdOutlineReport } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

interface ButtonProps {
  url?: string;
  type: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ url, label, type }) => {
  return url ? (
    <Link to={url} title={label}>
      {type === "View" ? (
        <>
          <FaEye className="text-black-600  hover:text-black-300 font-medium rounded-full text-2xl cursor-pointer flex items-center gap-2" />
        </>
      ) : type === "Delete" ? (
        <>
          <MdDelete className="text-red-600  hover:text-red-300 font-medium rounded-full text-2xl cursor-pointer flex items-center gap-2" />
        </>
      ) : type === "Edit" ? (
        <>
          <MdEdit className="text-blue-600  hover:text-blue-300 font-medium rounded-full text-2xl cursor-pointer flex items-center gap-2" />
        </>
      ) : type === "Report" ? (
        <>
          <MdOutlineReport className="text-yellow-600  hover:text-yellow-300 font-medium rounded-full text-2xl cursor-pointer flex items-center gap-2" />
        </>
      ) : type === "Info" ? (
        <>
          <FaCircleInfo className="text-green-600  hover:text-yellow-300 font-medium rounded-full text-2xl cursor-pointer flex items-center gap-2" />
        </>
      ) : null}
    </Link>
  ) : (
    <button>{label}</button>
  );
};

export default Button;
