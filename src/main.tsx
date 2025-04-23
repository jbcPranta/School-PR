import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EventManagement from "./pages/EventManagement";
import AnnouncementPage from "./pages/AnnouncementPage";
import IncomeListPage from "./pages/IncomeListPage";
import UnpaidListPage from "./pages/UnpaidListPage";
import UserListPage from "./pages/UserListPage";
import DocumentListPage from "./pages/DocumentListPage";
import StudentList from "./pages/StudentList";
import ExpenseItemList from "./pages/student-managment/ExpenseItemList";
import ClassList from "./pages/student-managment/ClassList";
import ClubList from "./pages/student-managment/ClubList";
import Dashboard from "./components/Dashboard";
import ChangePassword from "./pages/ChangePassword";
const router = createBrowserRouter([
  {
    
    path: "",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/event-list",
        element: <EventManagement />,
      },
      {
        path: "/announcement-list",
        element: <AnnouncementPage/>,
      },
      {
        path: "/income-list",
        element: <IncomeListPage />,
      },
      {
        path: "/unpaid-list",
        element: <UnpaidListPage />,
      },
      {
        path: "/doc-list",
        element: <DocumentListPage />,
      },
      {
        path: "/user-list",
        element: <UserListPage />,
      },
      {
        path: "/student-list",
        element: <StudentList />,
      },
      {
        path: "/club-list",
        element: <ClubList />,
      },
      {
        path: "/class-list",
        element: <ClassList />,
      },
      {
        path: "/expense-item-list",
        element: <ExpenseItemList />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider  router={router} />
);
