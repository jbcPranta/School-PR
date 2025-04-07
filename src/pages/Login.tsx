import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgEyeAlt } from "react-icons/cg";
import { RiEyeCloseLine } from "react-icons/ri";
import Decorative_Image from "../assets/login_decor.png";
import Login_Logo from "../assets/login_logo.png";
import toast, { Toaster } from "react-hot-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [userEmail, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!userEmail || !password) {
      toast.error("Enter User name and Password");
      return;
    }
  
    if (!isValidEmail(userEmail)) {
      toast.error("Invalid Email");
      return;
    }
  
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
  
    setTimeout(() => {
      toast.success("Login Success");
      navigate("/");
    });
  
    console.log(`User Email: ${userEmail}, Password: ${password}`);
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
            {/* Username Field */}
            <div className="mb-4 relative">
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserName(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#32479C] focus:outline-none focus:ring-0 focus:border-[#32479C] peer"
                placeholder="Email"
                required
              />
              <label className="absolute text-base text-[#32479C] font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={isPasswordVisible ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#32479C] focus:outline-none focus:ring-0 focus:border-[#32479C] peer"
                placeholder="Password"
                required
              />
              <label className="absolute text-base text-[#32479C] font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Password
              </label>
              {password.length > 0 && (
                <button
                  type="button"
                  title={isPasswordVisible ? "See password" : "Hide password"}
                  className="absolute top-4 right-3 cursor-pointer text-xl"
                  onClick={() => setIsPasswordVisible((e) => !e)}
                >
                  {isPasswordVisible ? <CgEyeAlt /> : <RiEyeCloseLine />}
                </button>
              )}
            </div>

            {/* Instructions */}
            <div className="text-center py-5">
              <p>
                アカウント情報を忘れた場合は
                <br />
                メールまたは電話にて
                <br />
                学校にお問い合わせをお願いいたします
              </p>
            </div>

            <Toaster toastOptions={{ duration: 3000 }} />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white border-1 border-[#32479C] text-[#32479C] font-bold py-2 px-4 rounded-md hover:bg-gray-300 cursor-pointer"
            >
              ログイン
            </button>

            {/* OR Text */}
            <div className="mt-4 text-center">
              <span className="text-sm text-[#32479C] font-bold">OR</span>
            </div>

            {/* Alternative Login */}
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
