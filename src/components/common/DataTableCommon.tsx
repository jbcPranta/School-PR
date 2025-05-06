import React, { useState } from "react";
import { Link } from "react-router-dom";

type User = {
  name: string;
  furigana_Name: string;
  role: string;
  mailAddress: string;
  phoneNumber: string;
};

const DataTableCommon: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const page = 1; // Adjust the page numbers the way you want
  const updatePageNumber = (num: number) => {
    if (num > page - 1 || 0 > num) {
      return setPageNumber(0);
    }
    setPageNumber(num);
  };
  const users: User[] = [
    {
      role: "Admin",
      name: "John Doe",
      furigana_Name: "ジョン・ドウ",
      phoneNumber: "123-456-7890",
      mailAddress: "john@gmail.com",
    },
    {
      role: "User",
      name: "Jane Smith",
      furigana_Name: "ジェーン・スミス",
      phoneNumber: "098-765-4321",
      mailAddress: "jane23@gmail.com",
    },
    {
      role: "User",
      name: "Jane Smith",
      furigana_Name: "ジェーン・スミス",
      phoneNumber: "098-765-4321",
      mailAddress: "jane23@gmail.com",
    },
  ];

  return (
    <div className="relative">
      {/* Header section */}
      <div className="pb-4  dark:bg-gray-900 flex justify-between items-center">
        <Link to={`/create-user`}>
          <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm py-2.5 px-5 cursor-pointer">
            Create User
          </button>
        </Link>

        <div className="relative w-1/2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md shadow-gray-100 rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cursor-pointer">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Furigana Name</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Mail address</th>
              <th className="px-6 py-3">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.furigana_Name}</td>
                <td className="px-6 py-4">{item.role}</td>
                <td className="px-6 py-4">{item.mailAddress}</td>
                <td className="px-6 py-4">{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 py-4 w-fit select-none">
        {/* left arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className=" hover:scale-110 scale-100 transition-all duration-200 bg-sky-50 px-1 py-1 rounded-md cursor-not-allowed"
        >
          <svg
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 7L10 12L15 17"
                stroke="#d3d3d3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          {[...Array(page).keys()].map((item) => (
            <div
              onClick={() => {
                setPageNumber(item);
              }}
              className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${pageNumber === item ? "bg-sky-500 text-white" : "bg-white"} border-sky-300  font-semibold text-gray-700   py-[6px] rounded-md`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber + 1);
          }}
          className=" hover:scale-110 scale-100 transition-all duration-200 bg-sky-50 px-1 py-1 rounded-md cursor-not-allowed"
        >
          <svg
            className="w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 7L15 12L10 17"
                stroke="#d3d3d3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DataTableCommon;
