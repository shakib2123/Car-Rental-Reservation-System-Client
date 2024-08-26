import { adminSidebarRoutes } from "@/utils/dashboard/adminSidebarRoutes";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavLink, useNavigate } from "react-router-dom";
import { userSidebarRoutes } from "@/utils/dashboard/userSidebarRoutes";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const DashboardMobileSidebar = ({ sidebarType }: { sidebarType: string }) => {
  const user = useAppSelector(selectCurrentUser);

  const profileText = user?.name?.slice(0, 1).toUpperCase();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
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
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mb-4">Dashboard</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4 py-8 border-t">
              {sidebarType === "admin"
                ? adminSidebarRoutes.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <NavLink
                        className={({ isActive }) =>
                          `text-gray-100 hover:text-orange-500 p-2 flex gap-3 items-center text-lg rounded-xl ${
                            isActive &&
                            "text-orange-500 border-l-4 border-orange-500"
                          }`
                        }
                        to={item.path}
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    </SheetClose>
                  ))
                : userSidebarRoutes.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <NavLink
                        key={item.path}
                        className={({ isActive }) =>
                          `text-gray-100 hover:text-orange-500 p-2 flex gap-3 items-center text-lg rounded-xl ${
                            isActive &&
                            "text-orange-500 border-l-4 border-orange-500"
                          }`
                        }
                        to={item.path}
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    </SheetClose>
                  ))}
            </div>
            <div className="flex flex-col pt-8 border-t h-full w-full gap-8">
              {/* Profile */}
              <div className="flex gap-3 items-center">
                <h2 className="p-2 rounded-full bg-orange-500 border text-2xl font-semibold size-12 text-center">
                  {profileText}
                </h2>
                <div className="">
                  <p className="text-gray-100 font-medium" title={user?.name}>
                    {user?.name?.slice(0, 15)}
                    {(user?.name?.length ?? 0) > 15 && "..."}
                  </p>
                  <p className="text-gray-300 text-sm" title={user?.email}>
                    {user?.email.slice(0, 20)}
                    {(user?.email?.length ?? 0) > 20 && "..."}
                  </p>
                </div>
              </div>
              {/* Logout */}
              <Button
                onClick={handleLogout}
                className="text-gray-100 bg-orange-500 hover:bg-orange-600 w-full"
              >
                LOGOUT
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardMobileSidebar;
