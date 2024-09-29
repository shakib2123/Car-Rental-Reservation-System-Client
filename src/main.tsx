import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import "@smastrom/react-rating/style.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { ThemeProvider } from "./components/shared/ThemeProvider/ThemeProvider.tsx";

type Theme = "dark" | "light" | "system";

const theme = (
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
) as Theme | undefined;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="bg-gray-100 text-gray-950 dark:bg-[#000] dark:text-gray-100 duration-200 ">
      <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
          <Toaster position="top-center" />
        </Provider>
      </ThemeProvider>
    </section>
  </StrictMode>
);
