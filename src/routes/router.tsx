// src/routes/router.tsx
import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Dashboard from "../components/Dashboard";
import EventManagement from "../pages/EventManagement";
import AnnouncementPage from "../pages/AnnouncementPage";
import IncomeListPage from "../pages/IncomeListPage";
import UnpaidListPage from "../pages/UnpaidListPage";
import UserListPage from "../pages/UserListPage";
import DocumentListPage from "../pages/DocumentListPage";
import StudentList from "../pages/StudentList";
import ExpenseItemList from "../pages/student-management/ExpenseItemList";
import ClassList from "../pages/student-management/ClassList";
import ClubList from "../pages/student-management/ClubList";
import ChangePassword from "../pages/ChangePassword";
import AdminPage from "../pages/AdminPage";
import AdminForm from "../pages/AdminForm";
import StudentForm from "../pages/StudentForm";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

export const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "event-list", element: <EventManagement /> },
      { path: "admin-page", element: <AdminPage /> },
      { path: "announcement-list", element: <AnnouncementPage /> },
      { path: "income-list", element: <IncomeListPage /> },
      { path: "unpaid-list", element: <UnpaidListPage /> },
      { path: "doc-list", element: <DocumentListPage /> },
      { path: "user-list", element: <UserListPage /> },
      { path: "student-list", element: <StudentList /> },
      { path: "club-list", element: <ClubList /> },
      { path: "class-list", element: <ClassList /> },
      { path: "expense-item-list", element: <ExpenseItemList /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "create-admin", element: <AdminForm /> },
      { path: "create-student", element: <StudentForm /> },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);
