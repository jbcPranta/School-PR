import React, { useState } from "react";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Define the interface for your form data
interface AddUserFormData {
  name: string;
  username: string;
  email?: string;
  phone?: string;
  avatar?: File;
  password: string;
  confirmPassword: string;
}

const AddUserForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddUserFormData>(); // Type form data here

  // Explicitly type the onSubmit handler
  const onSubmit: SubmitHandler<AddUserFormData> = (data) => {
    const { name, username, email, phone, avatar, password, confirmPassword } =
      data;

    // Validation checks
    if (!name || name.length > 255 || !/^[A-Za-z\s]+$/.test(name)) {
      toast.error(
        "Name is required and should contain only alphabets and spaces."
      );
      return;
    }

    if (
      !username ||
      username.length > 255 ||
      !/^[A-Za-z0-9\s]+$/.test(username)
    ) {
      toast.error(
        "Username is required and should contain only letters, numbers, and spaces."
      );
      return;
    }

    if (email && email.length > 255 && !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (phone && phone.length > 255 && !/^\d+$/.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (avatar && avatar.size > 5120 * 1024) {
      toast.error("Avatar image size must be less than 5MB.");
      return;
    }

    if (!password || password.length < 8) {
      toast.error(
        "Password is required and must be at least 8 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords must match.");
      return;
    }

    // If all validation passes, log data and show success toast
    console.log("User Data:", data);
    toast.success("User Added Successfully!");
  };
  console.log(errors.name?.message);

  // Handle Avatar Upload Preview
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("avatar", file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" mb={3}>
        Add User
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <div>
            {/* Name */}
            <div className="mb-4">
              <TextField
                fullWidth
                label="Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>

            {/* Username */}
            <div>
              <TextField
                fullWidth
                label="Username"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>

            {/* Email */}
            <div>
              <TextField
                fullWidth
                label="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>

            {/* Phone */}
            <div>
              <TextField
                fullWidth
                label="Phone"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </div>

            {/* Avatar Upload */}
            <div >
              {avatarPreview && (
                <Avatar
                  src={avatarPreview}
                  sx={{ width: 100, height: 100, margin: "auto" }}
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
              {errors.avatar && (
                <Typography color="error">{errors.avatar.message}</Typography>
              )}
            </div>

            {/* Password */}
            <div>
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <TextField
                fullWidth
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Add User
              </Button>
            </div>
          </div>
        </Box>
      </form>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default AddUserForm;
