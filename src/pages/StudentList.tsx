import React from "react";
import DataTableCommon from "../components/common/DataTableCommon";
import Button from "../components/Button";

interface User {
  role: string;
  name: string;
  furigana_Name: string;
  phoneNumber: string;
  emailAddress: string;
}

const StudentList: React.FC = () => {
  const users: User[] = [
    {
      role: "Admin",
      name: "John Doe",
      furigana_Name: "ジョン・ドウ",
      phoneNumber: "123-456-7890",
      emailAddress: "john@gmail.com",
    },
    {
      role: "User",
      name: "Jane Smith",
      furigana_Name: "ジェーン・スミス",
      phoneNumber: "098-765-4321",
      emailAddress: "jane23@gmail.com",
    },
    {
      role: "User",
      name: "Jane Smith",
      furigana_Name: "ジェーン・スミス",
      phoneNumber: "098-765-4321",
      emailAddress: "jane23@gmail.com",
    },
  ];
  const headerTitle = "Student List";
  const tableHead: { text: string; key: keyof User }[] = [
    { text: "Name", key: "name" },
    { text: "Furigana Name", key: "furigana_Name" },
    { text: "Role", key: "role" },
    { text: "Phone Number", key: "phoneNumber" },
    { text: "EMail Address", key: "emailAddress" },
  ];
  const buttons = [
    <Button url="/create-user" label="Create User" type="View" />,
    <Button url="/edit" label="Edit" type="Edit" />,
    <Button url="/delete" label="Delete" type="Delete" />,
  ];

  return (
    <div>
      <DataTableCommon
        tableHead={tableHead}
        data={users}
        headerTitle={headerTitle}
        Actions={buttons}
      />
    </div>
  );
};

export default StudentList;
