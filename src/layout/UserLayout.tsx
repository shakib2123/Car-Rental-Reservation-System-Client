import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <section className="lg:flex gap-8 ">
      <div className="lg:sticky lg:top-0 lg:left-0 lg:h-screen">
        <DashboardSidebar sidebarType="user" />
        <DashboardNavbar sidebarType="user" />
      </div>
      <div className="lg:p-8 text-white max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default UserLayout;
