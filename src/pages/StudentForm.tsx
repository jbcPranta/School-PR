import React from "react";
import toast from "react-hot-toast";
import CommonForm from "../components/common/CommonForm";

const StudentForm: React.FC = () => {
  const studentFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      validation: { required: "Name is required" },
    },
    {
      name: "name_furigana",
      label: "Furigana",
      type: "text",
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
      name: "grade",
      label: "Grade",
      type: "text",
      required: true,
    },
  ];

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log("Student Submitted:", data);
    toast.success("Student registered!");
  };

  return (
    <CommonForm
      title="Create Student"
      fields={studentFields}
      onSubmit={handleSubmit}
    />
  );
};

export default StudentForm;
