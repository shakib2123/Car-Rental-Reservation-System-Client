import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.types";
import { Link } from "react-router-dom";

const PaymentManagement = () => {
  const { data: bookingData } = useGetMyBookingsQuery(undefined);

  return (
    <section className="lg:p-8 text-gray-900 dark:text-white max-w-screen-xl mx-auto my-8 px-3">
      <Table className="p-12 min-w-[780px] md:w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Cost</TableHead>
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
               ${!booking?.returned && "text-blue-500"}
               ${booking?.returned && "text-green-500"}
               `}
              >
                {booking?.returned ? "Returned" : booking?.status}
              </TableCell>
              <TableCell className="text-sm">
                $ {booking?.totalCost.toFixed(2)}
              </TableCell>
              <TableCell className="flex flex-col lg:flex-row items-center justify-end gap-2 ">
                <Button
                  disabled={
                    booking?.status === "pending" ||
                    booking?.status === "cancel" ||
                    !booking?.returned ||
                    booking?.isPaid
                  }
                  className="bg-orange-500 hover:bg-orange-600 p-0"
                >
                  <Link className="p-4" to={`/user/payment/${booking?._id}`}>
                    {booking?.isPaid ? "Paid" : "Pay"}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default PaymentManagement;
