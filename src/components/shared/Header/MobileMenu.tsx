import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  logout,
  selectCurrentToken,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { routes } from "@/utils/Routes";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import { verifyToken } from "@/utils/verifyToken";

import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(selectCurrentToken);
  let verifiedUser: TUser | null = null;

  // Ensure the token is valid before trying to decode it
  if (token) {
    verifiedUser = verifyToken(token) as TUser;
  }

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button className="text-xl font-medium bg-transparent p-0 bg-second hover:bg-second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between items-center">
          <SheetHeader className="w-full">
            <SheetTitle className="text-xl mb-4 ">Menu</SheetTitle>

            <div className="flex flex-col space-y-2">
              {routes.map((route) => (
                <SheetClose asChild key={route.path}>
                  <NavLink
                    key={route.path}
                    className={({ isActive }) =>
                      `font-medium text-gray-900 dark:text-gray-100 hover:text-orange-500 uppercase p-2 border-b ${
                        isActive && "text-orange-500"
                      }`
                    }
                    to={route.path}
                  >
                    {route.name}
                  </NavLink>
                </SheetClose>
              ))}
              {verifiedUser?.email && (
                <NavLink
                  className={({ isActive }) =>
                    `font-medium text-gray-900 dark:text-gray-100 hover:text-orange-500 uppercase p-2 border-b ${
                      isActive && "text-orange-500"
                    }`
                  }
                  to={`/${verifiedUser?.role}/dashboard`}
                >
                  Dashboard
                </NavLink>
              )}
            </div>
          </SheetHeader>
          <SheetFooter className=" w-full">
            {!verifiedUser?.email ? (
              <Link to="/login" className="w-full">
                <Button className="text-gray-100  w-full bg-orange-500 hover:bg-orange-600">
                  LOGIN
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => dispatch(logout())}
                className="text-gray-100  w-full bg-orange-500 hover:bg-orange-600"
              >
                LOGOUT
              </Button>
            )}
            <ThemeSwitcher />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
