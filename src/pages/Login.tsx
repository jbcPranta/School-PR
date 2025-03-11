import React, { useState } from "react";
import { CgEyeAlt } from "react-icons/cg";
import { RiEyeCloseLine } from "react-icons/ri";
import Decorative_Image from "../assets/login_decor.png";
import Login_Logo from "../assets/login_logo.png";
import { toast, ToastContainer } from "react-toastify";

const Login: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!userName || !password) {
      toast("Enter User name and Password");
    }
    if (password.length < 8) {
      toast.error("Password must be contain 8 character");
      return;
    }
    toast.success("Login Success");
    console.log(`Login Data: ${userName} , ${password}`);
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[978px] mx-auto flex justify-between items-center min-h-screen">
        {/* Logo section */}
        <div className="w-[337px]">
          <img src={Login_Logo} alt="Login Logo" />
        </div>

        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg relative">
          <div className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 w-[337px]">
            <img src={Decorative_Image} alt="Decorative Image" />
          </div>
          <h2 className="text-3xl font-bold mb-6 mt-8">ログイン</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              {/* Username Field */}
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#32479C] appearance-none dark:text-white dark:border-[#32479C] dark:focus:border-[#32479C] focus:outline-none focus:ring-0 focus:border-[#32479C] peer"
                placeholder="ID"
              />
              <label className="absolute text-base text-[#32479C] font-bold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#32479C] peer-focus:dark:text-[#32479C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                ID
              </label>
            </div>
            <div className="relative">
              {/* Password Field */}
              <input
                type={isPasswordVisible ? "password" : "text"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#32479C] appearance-none dark:text-white dark:border-[#32479C] dark:focus:border-[#32479C] focus:outline-none focus:ring-0 focus:border-[#32479C] peer"
                placeholder="Password"
              />
              <label className="absolute text-base text-[#32479C] font-bold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#32479C] peer-focus:dark:text-[#32479C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Password
              </label>
              {password.length > 0 && (
                <button
                  type="button"
                  title={isPasswordVisible ? "See password" : "Hide password"}
                  className="absolute top-4 right-3 cursor-pointer text-xl"
                  onClick={() => setIsPasswordVisible((e) => !e)}
                >
                  {isPasswordVisible ? <CgEyeAlt />  : <RiEyeCloseLine />}
                </button>
              )}
            </div>
            <div className="text-center py-5">
              <p>
                アカウント情報を忘れた場合は
                <br />
                メールまたは電話にて
                <br />
                学校にお問い合わせをお願いいたします
              </p>
            </div>
            <ToastContainer autoClose={3000} />
            <button
              type="submit"
              className="w-full bg-white border-1 border-[#32479C] text-[#32479C] font-bold py-2 px-4 rounded-md hover:bg-gray-300 cursor-pointer"
            >
              ログイン
            </button>
            <div className="mt-4 text-center">
              <span className="text-sm text-[#32479C] font-bold">OR</span>
            </div>
            <button
              type="button"
              className="w-full mt-2 bg-[#32479C] text-white py-2 px-4 rounded-md font-bold cursor-pointer"
            >
              ROUTE CODE でログイン
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
