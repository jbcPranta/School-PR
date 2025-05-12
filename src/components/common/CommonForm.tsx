import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type FormData = {
  role: string;
  name: string;
  name_furigana: string;
  phoneNumber: string;
  email: string;
};

const CommonForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    toast.success("Login Success");
    console.log(data);
    setTimeout(() => {
      // Navigate to the desired page after submission
    }, 1000);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 space-y-6 bg-white shadow-md rounded-lg relative"
    >
      <h2 className="text-3xl font-bold text-[#32479C]">Create User</h2>
      <div>
        {/* Role */}
        <div className="mb-4 relative">
          <input
            required
            type="text"
            placeholder="Role"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors.role ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register("role", { required: "Role is required" })}
          />
          <label
            className={`absolute text-base ${
              errors.role ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            Role
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors.role?.message}
          </p>
        </div>

        {/* Name */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors.name ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          <label
            className={`absolute text-base ${
              errors.name ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            Name
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors.name?.message}
          </p>
        </div>

        {/* Furigana Name */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Furigana Name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors.name_furigana ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register("name_furigana", {
              required: "Furigana name is required",
            })}
          />
          <label
            className={`absolute text-base ${
              errors.name_furigana ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            Furigana Name
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors.name_furigana?.message}
          </p>
        </div>

        {/* Phone Number */}
        <div className="mb-4 relative">
          <input
            type="tel"
            placeholder="Phone Number"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors.phoneNumber ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          <label
            className={`absolute text-base ${
              errors.phoneNumber ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            Phone Number
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors.phoneNumber?.message}
          </p>
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors.email ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <label
            className={`absolute text-base ${
              errors.email ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            Email
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors.email?.message}
          </p>
        </div>

        {/* Buttons with Link */}
        <div className="flex gap-4 justify-between mt-6">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
          >
            Register
          </button>

          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommonForm;
