import { MdSpaceDashboard, MdBookmarks } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

export const userSidebarRoutes = [
  {
    name: "Dashboard",
    path: "/user/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    name: "Booking Management",
    path: "/user/booking-management",
    icon: <MdBookmarks />,
  },
  {
    name: "Payment Management",
    path: "/user/payment-management",
    icon: <FaDollarSign />,
  },
];
