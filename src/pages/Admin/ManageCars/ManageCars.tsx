import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";

const ManageCars = () => {
  return (
    <section className="lg:flex gap-8 ">
      <div className="">
        <DashboardSidebar sidebarType="admin" />
        <DashboardNavbar sidebarType="admin" />
      </div>
      <div className="lg:p-8 text-white max-w-screen-xl mx-auto">hi</div>
    </section>
  );
};

export default ManageCars;
