import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EventManagement from "./pages/EventManagement";
import AnnouncementPage from "./pages/AnnouncementPage";
import IncomeListPage from "./pages/IncomeListPage";
import UnpaidListPage from "./pages/UnpaidListPage";
import UserListPage from "./pages/UserListPage";
import DocumentListPage from "./pages/DocumentListPage";
import StudentList from "./pages/StudentList";
import ExpenseItemList from "./pages/student-management/ExpenseItemList";
import ClassList from "./pages/student-management/ClassList";
import ClubList from "./pages/student-management/ClubList";
import Dashboard from "./components/Dashboard";
import ChangePassword from "./pages/ChangePassword";
import AdminPage from "./pages/AdminPage";
import AdminForm from "./pages/AdminForm";
import StudentForm from "./pages/StudentForm";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to="/react" />,
  },
  {
    
    path: "/react",
    element: <Home />,
    children: [
      {
        path: "/react/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/react/event-list",
        element: <EventManagement />,
      },
      {
        path: "/react/admin-page",
        element: <AdminPage/>,
      },
      {
        path: "/react/announcement-list",
        element: <AnnouncementPage/>,
      },
      {
        path: "/react/income-list",
        element: <IncomeListPage />,
      },
      {
        path: "/react/unpaid-list",
        element: <UnpaidListPage />,
      },
      {
        path: "/react/doc-list",
        element: <DocumentListPage />,
      },
      {
        path: "/react/user-list",
        element: <UserListPage />,
      },
      {
        path: "/react/student-list",
        element: <StudentList />,
      },
      {
        path: "/react/club-list",
        element: <ClubList />,
      },
      {
        path: "/react/class-list",
        element: <ClassList />,
      },
      {
        path: "/react/expense-item-list",
        element: <ExpenseItemList />,
      },
      {
        path: "/react/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/react/create-admin",
        element: <AdminForm/>,
      },
      {
        path: "/react/create-student",
        element: <StudentForm/>,
      },
    ],
  },
  {
    path: "/react/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider  router={router} />
);
