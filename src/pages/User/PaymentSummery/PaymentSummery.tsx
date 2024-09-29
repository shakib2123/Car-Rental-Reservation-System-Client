import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetSingleBookingQuery } from "@/redux/features/booking/bookingApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  useCreateAamarPayCheckoutSessionMutation,
  useCreateStripeCheckoutSessionMutation,
} from "@/redux/features/payment/paymentApi";
import { toast } from "sonner";

const PaymentSummery = () => {
  const { id } = useParams();

  const [paymentMethod, setPaymentMethod] = useState("");

  const { data: bookingData } = useGetSingleBookingQuery(id);

  const [createStripeCheckoutSession] =
    useCreateStripeCheckoutSessionMutation();
  const [createAamarPayCheckoutSession] =
    useCreateAamarPayCheckoutSessionMutation();

  const handlePayment = async () => {
    if (paymentMethod === "") return;

    if (paymentMethod === "stripe") {
      await handleStripePayment();
    } else {
      handleAamerPayPayment();
    }
  };

  const handleStripePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OER86HEX9A0fqDWpBfD9mXrFNPdZhi2JvaRHjZLWnjeN3VdNnt0ai2kCD4cnOjR655KhcOPLrNCxeZkqPO6L2t900GjzCjnxa"
    );

    const paymentInfo = {
      carId: bookingData?.data?.car?._id,
      userId: bookingData?.data?.user?._id,
      userEmail: bookingData?.data?.user?.email,
      bookingId: bookingData?.data?._id,
      carName: bookingData?.data?.car?.name,
      carImage: bookingData?.data?.car?.image,
      totalCost: Number(bookingData?.data?.totalCost?.toFixed(2)),
      date: bookingData?.data?.date,
      startTime: bookingData?.data?.startTime,
      endTime: bookingData?.data?.endTime,
      paymentMethod,
    };

    const res = await createStripeCheckoutSession(paymentInfo);

    const result = await stripe?.redirectToCheckout({
      sessionId: res?.data?.data?.id,
    });

    if (result?.error) {
      toast.success("Something went wrong. Try again later.");
    }
  };

  const handleAamerPayPayment = async () => {
    const paymentInfo = {
      carId: bookingData?.data?.car?._id,
      userId: bookingData?.data?.user?._id,
      userEmail: bookingData?.data?.user?.email,
      bookingId: bookingData?.data?._id,
      carName: bookingData?.data?.car?.name,
      carImage: bookingData?.data?.car?.image,
      totalCost: Number(bookingData?.data?.totalCost?.toFixed(2)),
      date: bookingData?.data?.date,
      startTime: bookingData?.data?.startTime,
      endTime: bookingData?.data?.endTime,
      paymentMethod,
    };

    const res = await createAamarPayCheckoutSession(paymentInfo);

    if (res?.data?.data?.payment_url) {
      window.location.href = res?.data?.data?.payment_url;
    } else {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center px-3 py-8 text-gray-900 dark:text-gray-100">
      <div className="shadow-custom-light p-8 rounded-xl lg:min-w-[800px]">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
          Payment Summery!
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-full">
          <h3 className="text-gray-900 dark:text-gray-100">
            User Name: {bookingData?.data?.user?.name}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            User Email: {bookingData?.data?.user?.email}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            Car Model: {bookingData?.data?.car?.model}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            Total Cost: ${bookingData?.data?.totalCost?.toFixed(2)}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            Date: {bookingData?.data?.date}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            Start Time: {bookingData?.data?.startTime}
          </h3>
          <h3 className="text-gray-900 dark:text-gray-100">
            End Time: {bookingData?.data?.endTime}
          </h3>
        </div>
        <div className="mt-8 flex flex-col gap-y-4 ">
          <div>
            <Select
              onValueChange={(field) => setPaymentMethod(field)}
              required={true}
            >
              <SelectTrigger className="md:w-80 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a Payment option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"stripe"}>Stripe</SelectItem>
                  <SelectItem value={"aamarpay"}>aamar Pay</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {!paymentMethod && (
              <p className="text-red-500 mt-1">
                Please select a payment option
              </p>
            )}
          </div>
          <Button
            onClick={() => handlePayment()}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Confirm Payment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSummery;
