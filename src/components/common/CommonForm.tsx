import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FieldConfig = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  validation?: object;
};

type CommonFormProps = {
  title: string;
  fields: FieldConfig[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
};

const CommonForm: React.FC<CommonFormProps> = ({ title, fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const navigate = useNavigate();
  console.log(fields)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 space-y-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-3xl font-bold text-[#32479C]">{title}</h2>

      {fields.map((field) => (
        <div key={field.name} className="mb-4 relative">
          <input
            type={field.type}
            placeholder={field.placeholder || field.label}
            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 ${
              errors[field.name] ? "border-red-500" : "border-[#32479C]"
            }`}
            {...register(field.name, field.validation)}
          />
          <label
            className={`absolute text-base ${
              errors[field.name] ? "text-red-500" : "text-[#32479C]"
            } font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2`}
          >
            {field.label}
          </label>
          <p className="p-2 text-sm text-red-500 font-semibold">
            {errors[field.name]?.message as string}
          </p>
        </div>
      ))}

      <div className="flex gap-4 justify-between mt-6">
        <button
          type="button"
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CommonForm;
