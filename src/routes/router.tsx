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
import CarDetails from "@/pages/CarDetails/CarDetails";
import CarListing from "@/pages/CarListing/CarListing";
import BookingForm from "@/pages/BookingForm/BookingForm";
import BookingConfirmation from "@/pages/BookingConfirmation/BookingConfirmation";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import ForgetPassword from "@/pages/ForgetPassword/ForgetPassword";
import ChangePassword from "@/pages/ChangePassword/ChangePassword";
import AboutPage from "@/pages/AboutPage/AboutPage";
import TermsAndCondition from "@/pages/TermsAndCondition/TermsAndCondition";
import PrivacyAndPolicy from "@/pages/PrivacyAndPolicy/PrivacyAndPolicy";

import EditProfile from "@/pages/EditProfile/EditProfile";
import UpdateBooking from "@/pages/User/updateBooking/UpdateBooking";
import PaymentSummery from "@/pages/User/PaymentSummery/PaymentSummery";
import PaymentSuccess from "@/pages/PaymentPages/PaymentSuccess";
import PaymentCancel from "@/pages/PaymentPages/PaymentCancel";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "booking",
          element: <BookingPage />,
        },
        {
          path: "booking-form/:id",
          element: <BookingForm />,
        },
        {
          path: "booking-confirmation/:id",
          element: <BookingConfirmation />,
        },
        {
          path: "car-details/:id",
          element: <CarDetails />,
        },
        {
          path: "car-lists",
          element: <CarListing />,
        },
        {
          path: "about-us",
          element: <AboutPage />,
        },
        {
          path: "terms-and-conditions",
          element: <TermsAndCondition />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyAndPolicy />,
        },
        {
          path: "payment/success",
          element: <PaymentSuccess />,
        },
        {
          path: "payment/cancel",
          element: <PaymentCancel />,
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
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/reset-password",
      element: <ChangePassword />,
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
        {
          path: "edit-profile",
          element: <EditProfile />,
        },
        {
          path: "update-booking/:id",
          element: <UpdateBooking />,
        },
        {
          path: "payment/:id",
          element: <PaymentSummery />,
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
