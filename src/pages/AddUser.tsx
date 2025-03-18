import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { CgEyeAlt } from "react-icons/cg";
import { RiEyeCloseLine } from "react-icons/ri";
import { AddUserFormData } from "../models/models";


const AddUserForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const handleGeneratePassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*!@#$%^&()";
    let generatePassword = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      generatePassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(generatePassword);
    console.log(password);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddUserFormData>();

  const onSubmit: SubmitHandler<AddUserFormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords must match.");
      return;
    }
    toast.success("User Added Successfully!");
    console.log("User Data:", data);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("avatar", file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Add User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email (Optional)"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              {...register("phone")}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone (Optional)"
            />
          </div>

          <div className="mb-4">
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-20 h-20 mx-auto mb-2 rounded-full"
              />
            )}
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: 8,

              })}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <CgEyeAlt /> : <RiEyeCloseLine />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              className="block px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
          <div>
            <button onClick={handleGeneratePassword}>Generate PassWord</button>
          </div>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AddUserForm;
