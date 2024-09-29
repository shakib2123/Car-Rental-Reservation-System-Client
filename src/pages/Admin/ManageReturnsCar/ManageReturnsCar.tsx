import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/features/booking/bookingApi";
import { useReturnCarMutation } from "@/redux/features/car/carApi";
import { TBooking } from "@/types/booking.types";
import { toast } from "sonner";

const ManageReturnsCar = () => {
  const { data: bookingsData } = useGetAllBookingsQuery(undefined);

  const [returnCar, { isLoading: isReturnCarLoading }] = useReturnCarMutation();

  const handleReturnCar = async (id: string) => {
    const now = new Date();

    // Extract the hours and minutes
    const hours = now.getHours();
    let minutes: string | number = now.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const bookingData = {
      bookingId: id,
      endTime: `${hours}:${minutes}`,
    };

    const res = await returnCar(bookingData);

    if (res?.data?.success) {
      toast.success("Car returned successfully!");
    } else {
      toast.error("Something went wrong. Try again later!");
    }
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
                  onClick={() => handleReturnCar(booking?._id)}
                  disabled={
                    booking?.returned ||
                    isReturnCarLoading ||
                    booking?.status !== "approve"
                  }
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  {(booking?.returned && "Returned") ||
                    (booking?.status !== "approve" && "Pending Approval") ||
                    (booking?.status === "approve" && "Return Car")}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ManageReturnsCar;
