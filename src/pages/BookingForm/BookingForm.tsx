import Logo from "@/components/shared/Logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { setBooking } from "@/redux/features/booking/bookingSlice";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

type TBookingForm = {
  passport: string;
  drivingLicense: string;
  creditCard: number;
  GPS: string;
  childSeat: string;
};

const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const BookingForm = () => {
  const { id: carId } = useParams();

  const [loading, setLoading] = useState(false);

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TBookingForm>();
  const onSubmit: SubmitHandler<TBookingForm> = async (data) => {
    // Create FormData and append the file
    const formData = new FormData();
    if (data?.passport && data.passport[0]) {
      formData.append("image", data.passport[0]);
    } else {
      throw new Error("No file selected");
    }

    setLoading(true);

    // Send the request to the API
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const imgData = await response.json();

    setLoading(false);

    const bookingData = {
      passport: imgData.data.url,
      drivingLicense: data?.drivingLicense,
      creditCard: data?.creditCard,
      GPS: data?.GPS === "true",
      childSeat: data?.childSeat === "true",
      userEmail: user?._id,
      car: carId,
    };
    console.log(bookingData);

    dispatch(setBooking(bookingData));
    navigate(`/booking-confirmation/${carId}`);
  };

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center px-3 py-8">
      <div className="shadow-custom-light p-8 rounded-xl">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo />
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 text-center mb-8">
          Book a car!
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* NID/passport */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="passport">NID/Passport:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="file"
                  id="passport"
                  {...register("passport", { required: true })}
                />
              </div>
              {errors?.passport && (
                <p className="text-red-500 text-sm">NID/Passport is required</p>
              )}
            </div>
            {/* Driving License */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="drivingLicense">Driving License:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="drivingLicense"
                  {...register("drivingLicense", { required: true })}
                />
              </div>
              {errors?.drivingLicense && (
                <p className="text-red-500 text-sm">
                  Driving License is required
                </p>
              )}
            </div>
            {/* Credit Card */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="creditCard">Credit Card:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="creditCard"
                  {...register("creditCard", { required: true })}
                />
              </div>
              {errors?.creditCard && (
                <p className="text-red-500 text-sm">Credit Card is required</p>
              )}
            </div>

            {/* GPS */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="GPS">GPS:</Label>
                <Controller
                  name="GPS"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="md:w-80 focus-visible:ring-offset-0">
                        <SelectValue placeholder="Select a GPS option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"false"}>No</SelectItem>
                          <SelectItem value={"true"}>Yes</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              {errors?.GPS && (
                <p className="text-red-500 text-sm">GPS is required</p>
              )}
            </div>
            {/* child seat */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="childSeat">Child Seat:</Label>
                <Controller
                  name="childSeat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="md:w-80 focus-visible:ring-offset-0">
                        <SelectValue placeholder="Select a Child Seat" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"false"}>No</SelectItem>
                          <SelectItem value={"true"}>Yes</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              {errors?.childSeat && (
                <p className="text-red-500 text-sm">Child Seat is required</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 mt-6"
          >
            {loading ? "Loading..." : "Book Now"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
