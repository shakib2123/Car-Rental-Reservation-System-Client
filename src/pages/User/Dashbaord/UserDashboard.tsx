import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

const UserDashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { data: myBookings, isLoading } = useGetMyBookingsQuery(undefined);

  let totalCost = 0;

  if (!isLoading) {
    myBookings?.data?.forEach((booking: any) => {
      totalCost += booking?.car?.pricePerHour;
    });
  }

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-0 py-8 lg:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
        {/* Total Booking */}
        <div className="text-center p-6 rounded-xl bg-blue-500 min-w-[300px] min-h-[180px] flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-100">Total Booking</h2>
          <p className="text-5xl font-bold text-gray-100 flex items-center justify-center gap-2">
            <FaCar />
            {myBookings?.data?.length || 0}
          </p>
        </div>
        {/* Total Cost */}
        <div className="text-center p-6 rounded-xl bg-orange-500 min-w-[300px] min-h-[180px] flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-100">Total Cost</h2>
          <p className="text-5xl font-bold text-gray-100 flex items-center justify-center gap-2">
            <FaDollarSign />
            {totalCost || 0}
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-second/10 dark:bg-second rounded-xl space-y-3 w-full">
        {/* User information */}

        <div className="grid w-full items-center gap-1.5 relative">
          <Label htmlFor="name" className="text-gray-900 dark:text-gray-100">
            Name:
          </Label>
          <Input
            disabled
            defaultValue={user?.name}
            className="w-full focus-visible:ring-offset-0 text-gray-900 dark:text-gray-100"
            type="text"
            id="name"
          />
        </div>

        <div className="grid w-full items-center gap-1.5 relative">
          <Label htmlFor="phone" className="text-gray-900 dark:text-gray-100">
            Phone:
          </Label>
          <Input
            disabled
            defaultValue={user?.phone}
            className="w-full focus-visible:ring-offset-0 text-gray-900 dark:text-gray-100"
            type="text"
            id="phone"
          />
        </div>

        <div className="grid w-full items-center gap-1.5 relative pb-4">
          <Label htmlFor="email" className="text-gray-900 dark:text-gray-100">
            Email:
          </Label>
          <Input
            disabled
            defaultValue={user?.email}
            className="w-full focus-visible:ring-offset-0 text-gray-900 dark:text-gray-100"
            type="text"
            id="email"
          />
        </div>
        <Link to={"/user/edit-profile"}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Edit Profile
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UserDashboard;
