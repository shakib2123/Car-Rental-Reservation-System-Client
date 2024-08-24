import App from "@/App";
import Home from "@/pages/Home/Home";

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
  ]);
