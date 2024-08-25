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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
