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
    path: "/admin/manage-cars",
    icon: <FaCarSide />,
  },
  {
    name: "Manage Bookings",
    path: "/admin/manage-bookings",
    icon: <MdBookmarks />,
  },
  {
    name: "Manage Return Cars",
    path: "/admin/manage-return-cars",
    icon: <GiReturnArrow />,
  },
  {
    name: "User Management",
    path: "/admin/manage-users",
    icon: <FaUsers />,
  },
];
