import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { routes } from "@/utils/Routes";
import {
  logout,
  selectCurrentToken,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import ThemeSwitcher from "@/utils/ThemeSwitcher";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(selectCurrentToken);
  let verifiedUser: TUser | null = null;

  // Ensure the token is valid before trying to decode it
  if (token) {
    verifiedUser = verifyToken(token) as TUser;
  }

  return (
    <div className="bg-second">
      <div className="max-w-screen-xl min-h-20 mx-auto flex items-center justify-between px-3 ">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile device menus */}
        <MobileMenu />

        {/* Navigation menu */}
        <div className="lg:flex items-center gap-8 hidden">
          {routes.map((route) => (
            <NavLink
              key={route?.path}
              className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-orange-500 uppercase ${
                  isActive && "text-orange-500"
                }`
              }
              to={route?.path}
            >
              {route?.name}
            </NavLink>
          ))}
          {verifiedUser?.email && (
            <NavLink
              className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-orange-500 uppercase ${
                  isActive && "text-orange-500"
                }`
              }
              to={`/${verifiedUser?.role}/dashboard`}
            >
              Dashboard
            </NavLink>
          )}
          {!verifiedUser?.email ? (
            <Link to="/login">
              <Button className="text-gray-100 bg-orange-500 hover:bg-orange-600">
                LOGIN
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => dispatch(logout())}
              className="text-gray-100 bg-orange-500 hover:bg-orange-600"
            >
              LOGOUT
            </Button>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
