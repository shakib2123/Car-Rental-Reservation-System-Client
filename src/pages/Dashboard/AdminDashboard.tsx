import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";

const AdminDashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  return (
    <div>
      <h1>This is AdminDashboard component</h1>
    </div>
  );
};

export default AdminDashboard;
