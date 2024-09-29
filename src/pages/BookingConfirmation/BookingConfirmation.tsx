import { Button } from "@/components/ui/button";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import { useGetSingleCarQuery } from "@/redux/features/car/carApi";
import { useAppSelector } from "@/redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const BookingConfirmation = () => {
  const { id } = useParams();
  const { data: carData } = useGetSingleCarQuery(id);

  const booking = useAppSelector((state) => state.booking);

  const navigate = useNavigate();

  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const handleBooking = async () => {
    const now = new Date();

    // Extract the hours and minutes
    const hours = now.getHours();
    let minutes: string | number = now.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const bookingData = {
      carId: carData?.data?._id,
      GPS: booking.GPS,
      childSeat: booking.childSeat,
      date: booking.date,
      startTime: `${hours}:${minutes}`,
      creditCard: booking.creditCard,
      drivingLicense: booking.drivingLicense,
      passport: booking.passport,
    };

    const res = await createBooking(bookingData);

    toast.success(res.data.message);
    navigate("/booking");
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-0 min-h-screen flex items-center justify-center py-8">
      <div className="max-w-lg mx-auto">
        <img className="rounded-xl" src={carData?.data?.image} alt="" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
          {carData?.data?.name}
        </h3>
        <h3 className="text-xl font-semibold text-orange-500">
          Price Per Hour: {carData?.data?.pricePerHour} USD
        </h3>

        <div className="mt-3 border-t py-3">
          <h3 className="text-gray-900 dark:text-gray-100">
            GPS: {booking?.GPS ? "Yes" : "No"}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            Child Seat: {booking?.childSeat ? "Yes" : "No"}
          </h3>
        </div>
        <Button
          onClick={handleBooking}
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Confirm Booking
        </Button>
      </div>
    </section>
  );
};

export default BookingConfirmation;
