import App from "@/App";
import CreateCar from "@/pages/Admin/CreateCar/CreateCar";
import ManageCars from "@/pages/Admin/ManageCars/ManageCars";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard";
import UserDashboard from "@/pages/Dashboard/UserDashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";

import { createBrowserRouter } from "react-router-dom";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      //   errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user/dashboard",
      element: <UserDashboard />,
    },
    // Admin routes
    {
      path: "/admin/dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/admin/manage-cars",
      element: <ManageCars />,
    },
    // others

    {
      path: "/admin/create-car",
      element: <CreateCar />,
    },
  ]);
