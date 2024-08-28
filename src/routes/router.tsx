import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import CreateCar from "@/pages/Admin/CreateCar/CreateCar";
import ManageCars from "@/pages/Admin/ManageCars/ManageCars";
import UpdateCar from "@/pages/Admin/UpdateCar/UpdateCar";
import UserManagement from "@/pages/Admin/UserManagement/UserManagement";
import BookingPage from "@/pages/BookingPage/BookingPage";
import AdminDashboard from "@/pages/Admin/Dashboard/AdminDashboard";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";

import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "@/pages/User/Dashbaord/UserDashboard";
import UserLayout from "@/layout/UserLayout";
import ManageBookings from "@/pages/Admin/ManageBookings/ManageBookings";
import ManageReturnsCar from "@/pages/Admin/ManageReturnsCar/ManageReturnsCar";
import BookingManagement from "@/pages/User/BookingManagement/BookingManagement";
import PaymentManagement from "@/pages/User/PaymentManagement/PaymentManagement";

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
        {
          path: "booking",
          element: <BookingPage />,
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

    // User dashboard routes
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        {
          path: "dashboard",
          element: <UserDashboard />,
        },
        {
          path: "booking-management",
          element: <BookingManagement />,
        },
        {
          path: "payment-management",
          element: <PaymentManagement />,
        },
      ],
    },

    // Admin dashboard routes
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "manage-cars",
          element: <ManageCars />,
        },
        {
          path: "manage-bookings",
          element: <ManageBookings />,
        },
        {
          path: "create-car",
          element: <CreateCar />,
        },
        {
          path: "update-car/:id",
          element: <UpdateCar />,
        },
        {
          path: "manage-return-cars",
          element: <ManageReturnsCar />,
        },
        {
          path: "manage-users",
          element: <UserManagement />,
        },
      ],
    },
  ]);
