import DashboardMobileSidebar from "../DashboardSidebar/DashboardMobileSidebar";
import Logo from "../shared/Logo/Logo";

const DashboardNavbar = ({ sidebarType }: { sidebarType: string }) => {
  return (
    <div className="flex items-center justify-between h-20 bg-second px-3 lg:hidden  ">
      {/* Logo */}
      <div className="max-w-[160px] pb-4">
        <Logo />
      </div>
      {/* Menu Items */}
      <div>
        <DashboardMobileSidebar sidebarType={sidebarType} />
      </div>
    </div>
  );
};

export default DashboardNavbar;
