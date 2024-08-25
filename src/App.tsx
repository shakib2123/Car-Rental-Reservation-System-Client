import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Header/Navbar";
import Footer from "./components/shared/Footer/Footer";

const App = () => {
  return (
    <section>
      <Navbar />

      <Outlet />

      <Footer />
    </section>
  );
};

export default App;
