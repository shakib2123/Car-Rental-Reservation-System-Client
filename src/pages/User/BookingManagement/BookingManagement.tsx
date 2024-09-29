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
  useCancelBookingMutation,
  useGetMyBookingsQuery,
} from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const BookingManagement = () => {
  const { data: bookingData } = useGetMyBookingsQuery(undefined);

  const [cancelBooking] = useCancelBookingMutation();

  const handleBookingCancel = async (id: string) => {
    const res = await cancelBooking(id);
    if (res?.data?.success) {
      toast.success(res?.data?.message);
    } else {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="lg:p-8 text-gray-900 dark:text-white max-w-screen-xl mx-auto my-8 px-3">
      <Table className="p-12 min-w-[780px] md:w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price Per Hour</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingData?.data?.map((booking: TBooking) => (
            <TableRow key={booking?._id}>
              <TableCell className="text-sm">{booking?.car?.name}</TableCell>
              <TableCell className="text-sm">{booking?.date}</TableCell>
              <TableCell
                className={`text-sm 
               ${booking?.status === "pending" && "text-blue-500"}
               ${booking?.status === "cancel" && "text-red-500"}
               ${booking?.status === "approve" && "text-green-500"}
               `}
              >
                {booking?.status}
              </TableCell>
              <TableCell className="text-sm">
                {booking?.car?.pricePerHour}
              </TableCell>
              <TableCell className="flex flex-col lg:flex-row items-center justify-end gap-2 ">
                <Button
                  disabled={
                    booking?.status === "pending" ||
                    booking?.status === "cancel" ||
                    booking?.isPaid
                  }
                  className="bg-blue-500 hover:bg-blue-600 p-0"
                >
                  <Link
                    to={`/user/update-booking/${booking?._id}`}
                    className="p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Link>
                </Button>

                <Button
                  onClick={() => handleBookingCancel(booking?._id)}
                  disabled={
                    booking?.status === "pending" ||
                    booking?.status === "cancel" ||
                    booking?.isPaid
                  }
                  variant={"destructive"}
                >
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingManagement;
