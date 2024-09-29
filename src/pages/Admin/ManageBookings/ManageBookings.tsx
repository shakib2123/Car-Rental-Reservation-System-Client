import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllBookingsQuery,
  useHandleBookingStatusMutation,
} from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.types";

const ManageBookings = () => {
  const { data: bookingsData } = useGetAllBookingsQuery(undefined);

  const [handleBookingStatus] = useHandleBookingStatusMutation();

  const handleApprove = async (id: string) => {
    const userInfo = {
      id,
      status: "approve",
    };

    await handleBookingStatus(userInfo);
  };

  const handleCancel = async (id: string) => {
    const userInfo = {
      id,
      status: "cancel",
    };

    await handleBookingStatus(userInfo);
  };

  return (
    <section className="lg:p-8 text-gray-900 dark:text-white max-w-screen-xl mx-auto my-8 px-3">
      <Table className="p-12 min-w-[880px] md:w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingsData?.data?.map((booking: TBooking) => (
            <TableRow key={booking?._id}>
              <TableCell>
                <img
                  className="object-cover rounded-lg size-14"
                  src={booking?.car?.image}
                  alt={booking?.car?.model}
                />
              </TableCell>
              <TableCell className="text-sm">{booking?.car?.name}</TableCell>
              <TableCell className="text-sm">{booking?.car?.model}</TableCell>
              <TableCell className="text-sm">{booking?.car?.year}</TableCell>
              <TableCell className="text-sm">{booking?.user?.email}</TableCell>

              <TableCell className="text-sm">{booking?.date}</TableCell>
              <TableCell className="text-right  flex flex-col lg:flex-row items-center gap-2 ">
                <Button
                  onClick={() => handleApprove(booking?._id)}
                  disabled={
                    booking?.status === "approve" ||
                    booking?.status === "cancel"
                  }
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  {booking?.status === "approve" ? "approved" : "approve"}
                </Button>

                <Button
                  disabled={
                    booking?.status === "cancel" ||
                    booking?.status === "approve"
                  }
                  onClick={() => handleCancel(booking?._id)}
                  variant={"destructive"}
                >
                  {booking?.status === "cancel" ? "cancelled" : "cancel"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ManageBookings;
