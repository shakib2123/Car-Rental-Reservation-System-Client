import App from "@/App";
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
  ]);
