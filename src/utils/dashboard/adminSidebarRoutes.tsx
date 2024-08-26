import { MdSpaceDashboard, MdBookmarks } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

export const adminSidebarRoutes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    name: "Manage Cars",
    path: "/admin/dashboard/manage-cars",
    icon: <FaCarSide />,
  },
  {
    name: "Manage Bookings",
    path: "/admin/dashboard/manage-bookings",
    icon: <MdBookmarks />,
  },
  {
    name: "Manage Return Cars",
    path: "/admin/dashboard/manage-return-cars",
    icon: <GiReturnArrow />,
  },
  {
    name: "User Management",
    path: "/admin/dashboard/manage-users",
    icon: <FaUsers />,
  },
];
