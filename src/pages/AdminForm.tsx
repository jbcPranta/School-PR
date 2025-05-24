import React from "react";
import toast from "react-hot-toast";
import CommonForm from "../components/common/CommonForm";

const AdminForm: React.FC = () => {
  const adminFields = [
    {
      name: "role",
      label: "Role",
      type: "text",
      validation: { required: "Role is required" },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      },
    },
    {
      name: "department",
      label: "Department",
      type: "text",
    },
  ];

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log("Admin Submitted:", data);
    toast.success("Admin created!");
  };

  return (
    <CommonForm
      title="Create Admin"
      btnText= "Register Admin"
      fields={adminFields}
      onSubmit={handleSubmit}
    />
  );
};

export default AdminForm;
