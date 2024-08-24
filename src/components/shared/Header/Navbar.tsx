import { routes } from "@/utils/Routes";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-second">
      <div className="max-w-screen-xl min-h-20 mx-auto flex items-center justify-between px-3 ">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>
        {/* Navigation menu */}
        <div className="flex items-center gap-8">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-orange-500 uppercase ${
                  isActive && "text-orange-500"
                }`
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
          <Link to="/login">
            <Button className="text-gray-100 bg-orange-500 hover:bg-orange-600">
              LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
