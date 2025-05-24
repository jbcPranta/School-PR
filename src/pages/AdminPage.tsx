import React from "react";
import DataTableCommon from "../components/common/DataTableCommon";
import Button from "../components/Button";

interface AdminData {
  name: string;
  name_furigana: string;
  role: string;
  emailAddress: string;
  phoneNumber: string;
}

const AdminPage: React.FC = () => {
  
  const adminData: AdminData[] = [
    {
      name: "Taro Yamada",
      name_furigana: "やまだ たろう",
      role: "Administrator",
      emailAddress: "taro.yamada@example.com",
      phoneNumber: "090-1234-5678",
    },
    {
      name: "Hanako Suzuki",
      name_furigana: "すずき はなこ",
      role: "Manager",
      emailAddress: "hanako.suzuki@example.com",
      phoneNumber: "080-2345-6789",
    },
    {
      name: "Kenta Sato",
      name_furigana: "さとう けんた",
      role: "Staff",
      emailAddress: "kenta.sato@example.com",
      phoneNumber: "070-3456-7890",
    },
    {
      name: "Aiko Tanaka",
      name_furigana: "たなか あいこ",
      role: "Supervisor",
      emailAddress: "aiko.tanaka@example.com",
      phoneNumber: "090-4567-8901",
    },
  ];
  const headerTitle = "Admin List";
  const tableHead: { text: string; key: keyof AdminData }[] = [
    { text: "Name", key: "name" },
    { text: "Furigana Name", key: "name_furigana" },
    { text: "Role", key: "role" },
    { text: "Mail Address", key: "emailAddress" },
    { text: "Phone Number", key: "phoneNumber" }
  ];

  const buttons = [
    <Button url="/create-user" label="View Details" type="View" />,
    <Button url="/edit" label="Edit" type="Edit" />,
    <Button url="/delete" label="Delete" type="Delete" />,
  ];

  return (
    <div>
      <DataTableCommon
        tableHead={tableHead}
        data={adminData}
        headerTitle={headerTitle}
        pageLink={{
          url: "/create-admin",
          label: "Create Admin",
        }}
        Actions={buttons}
      />
    </div>
  );
};

export default AdminPage;
