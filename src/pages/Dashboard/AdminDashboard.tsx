import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";

const AdminDashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  return (
    <section className="lg:flex gap-8 ">
      <div className="">
        <DashboardSidebar sidebarType="admin" />
        <DashboardNavbar sidebarType="admin" />
      </div>
      <div className="lg:p-8 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt aliquam
        explicabo eius voluptas culpa eos asperiores vel nisi, itaque neque
        delectus qui porro maxime ut odit numquam cum provident?
      </div>
    </section>
  );
};

export default AdminDashboard;
