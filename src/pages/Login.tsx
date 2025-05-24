import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgEyeAlt } from "react-icons/cg";
import { RiEyeCloseLine } from "react-icons/ri";
import Decorative_Image from "../assets/login_decor.png";
import Login_Logo from "../assets/login_logo.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { loginUser } from "../features/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import Loading from "./Loading";
type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors, isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      dispatch(setCredentials(response));
      toast.success(response.message);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message
          ? `"Error from here": ${error.response.data.message}`
          : "Login Failed"
      );
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-2">
      {loading && <Loading />}
      {
        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center gap-15 lg:gap-8 py-8">
          {/* Logo section */}
          <div className="w-full max-w-xs flex justify-center mb-8 lg:mb-0">
            <img
              src={Login_Logo}
              alt="Login Logo"
              className="w-56 md:w-64 lg:w-80"
            />
          </div>

          <div className="w-full max-w-md bg-white p-6 sm:p-8 shadow-lg rounded-lg relative">
            <div className="absolute -top-15 left-1/2 transform -translate-x-1/2 w-56 md:w-64 lg:w-80">
              <img src={Decorative_Image} alt="Decorative Image" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 mt-12 text-center">
              ログイン
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Email Field */}
              <div className="mb-4 relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  ${errors.email ? "border-red-500 focus:outline-none focus:ring-0 focus:border-[#32479C] " : "border-[#32479C] "} `}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <label
                  className={`absolute text-base ${errors.email ? "text-red-500" : "text-[#32479C]"} font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  Email
                </label>
                <p className="p-2 text-sm text-red-500 font-semibold">
                  {errors.email?.message}
                </p>
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  type={isPasswordVisible ? "password" : "text"}
                  id="password"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  ${errors.password ? "border-red-500 focus:outline-none focus:ring-0 focus:border-[#32479C] " : "border-[#32479C] "} `}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    onChange: (e) => setPassword(e.target.value),
                  })}
                />
                <label
                  className={`absolute text-base ${errors.password ? "text-red-500" : "text-[#32479C]"} font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  Password
                </label>
                <p className="p-2 text-sm text-red-500 font-semibold">
                  {errors.password?.message}
                </p>
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
              <div className="text-right">
                <Link to={"/forgot-password"}>
                  <p className="text-[#32479C] font-bold ">Forget Password?</p>
                </Link>
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

              {/* Login Button */}
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 ${!isValid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
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
      }
    </div>
  );
};

export default Login;
