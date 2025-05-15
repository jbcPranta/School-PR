import React from "react";
import DataTableCommon from "../components/common/DataTableCommon";
import Button from "../components/Button";

interface StudentData {
  student_name: string;
  student_name_furigana: string;
  school_year: string;
  class: string;
  student_id_number: string;
  club: string;
}

const StudentList: React.FC = () => {
  const studentData: StudentData[] = [
    {
      student_name: "Yuki Tanaka",
      student_name_furigana: "たなか ゆき",
      school_year: "2nd Year",
      class: "B",
      student_id_number: "20230501",
      club: "Basketball",
    },
    {
      student_name: "Haruto Sato",
      student_name_furigana: "さとう はると",
      school_year: "1st Year",
      class: "A",
      student_id_number: "20240115",
      club: "Art",
    },
    {
      student_name: "Mio Suzuki",
      student_name_furigana: "すずき みお",
      school_year: "3rd Year",
      class: "C",
      student_id_number: "20220718",
      club: "Science",
    },
    {
      student_name: "Kenta Nakamura",
      student_name_furigana: "なかむら けんた",
      school_year: "2nd Year",
      class: "D",
      student_id_number: "20230823",
      club: "Music",
    },
  ];
  const headerTitle = "Student List";
  const tableHead: { text: string; key: keyof StudentData }[] = [
    { text: "Student Name", key: "student_name" },
    { text: "Furigana Name", key: "student_name_furigana" },
    { text: "School Year", key: "school_year" },
    { text: "Class", key: "class" },
    { text: "Student ID Number", key: "student_id_number" },
    { text: "Club", key: "club" },
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
        data={studentData}
        headerTitle={headerTitle}
        createPage="/react/create-student"
        Actions={buttons}
      />
    </div>
  );
};

export default StudentList;
