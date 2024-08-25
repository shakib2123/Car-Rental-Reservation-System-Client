import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Header/Navbar";
import { ThemeProvider } from "./components/shared/ThemeProvider/ThemeProvider";
import Footer from "./components/shared/Footer/Footer";

const App = () => {
  return (
    <section>
      <Navbar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
      <Footer />
    </section>
  );
};

export default App;
