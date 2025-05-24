import React, { useEffect, useState } from "react";
import DataTableCommon from "../components/common/DataTableCommon";
import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance";
import Loading from "./Loading";
import { StudentData } from "../models/models";

const StudentList: React.FC = () => {
  const token = localStorage.getItem("token");
  const headerTitle = "Student List";
  const tableHead: { text: string; key: keyof StudentData }[] = [
    { text: "#", key: "id" },
    { text: "Name", key: "name" },
    { text: "Furigana Name", key: "name_furigana" },
    { text: "Email", key: "email" },
    { text: "Phone", key: "phone" },
    // { text: "Avatar", key: "avatar" }, // Optional
  ];

  const { data: studentData = [], isLoading, isError } = useQuery<StudentData[]>({
    queryKey: ["studentData"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    },
    enabled: !!token, 
  });

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
      const timer = setTimeout(() => setShowLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [isLoading]);

  const buttons = [
    <Button url="/create-user" label="View Details" type="View" />,
    <Button url="/edit" label="Edit" type="Edit" />,
    <Button url="/delete" label="Delete" type="Delete" />,
  ];

  if (showLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="relative">
      <DataTableCommon
        tableHead={tableHead}
        data={studentData ?? []}
        headerTitle={headerTitle}
        pageLink={{
          url: "/create-student",
          label: "Create Student",
        }}
        Actions={buttons}
      />
    </div>
  );
};

export default StudentList;
