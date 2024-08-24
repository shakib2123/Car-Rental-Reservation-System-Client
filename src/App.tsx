import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Header/Navbar";
import { ThemeProvider } from "./components/shared/ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <section>
      <Navbar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
    </section>
  );
};

export default App;
