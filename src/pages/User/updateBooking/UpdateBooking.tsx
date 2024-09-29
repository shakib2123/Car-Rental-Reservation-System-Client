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
import { TBookingForm } from "@/pages/BookingForm/BookingForm";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/features/booking/bookingApi";

import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const UpdateBooking = () => {
  const { id: bookingId } = useParams();

  const { data: bookingData } = useGetSingleBookingQuery(bookingId);

  const [UpdateBooking] = useUpdateBookingMutation();

  const [loading, setLoading] = useState(false);

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

    const updatedBooking = {
      passport: imgData.data.url,
      drivingLicense: data?.drivingLicense,
      creditCard: data?.creditCard,
      date: data?.date,
      GPS: data?.GPS === "true",
      childSeat: data?.childSeat === "true",
    };

    const updatedBookingData = {
      id: bookingId,
      updatedBooking,
    };

    const res = await UpdateBooking(updatedBookingData).unwrap();
    if (res.success) {
      toast.success(res.message);
      navigate(-1);
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center px-3 py-8">
      <div className="shadow-custom-light p-8 rounded-xl">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo isDark={true} />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
          Book a car!
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 text-gray-900 dark:text-gray-100">
            {/* NID/passport */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label
                  htmlFor="passport"
                  className="text-gray-900 dark:text-gray-100"
                >
                  NID/Passport:
                </Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0 text-gray-900 dark:text-gray-100"
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
                  defaultValue={bookingData?.data?.drivingLicense}
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
            {/* Date */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="date">Date:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  defaultValue={bookingData?.data?.date}
                  type="date"
                  id="date"
                  {...register("date", { required: true })}
                />
              </div>
              {errors?.date && (
                <p className="text-red-500 text-sm">Date is required</p>
              )}
            </div>
            {/* Credit Card */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="creditCard">Credit Card:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  defaultValue={bookingData?.data?.creditCard}
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
            {loading ? "Loading..." : "Update Now"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default UpdateBooking;
