import { Button } from "@/components/ui/button";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="p-8 rounded-xl shadow-custom-light flex flex-col items-center justify-center">
        <BiSolidDollarCircle className="text-6xl text-orange-500 mb-4" />
        <h2 className=" text-2xl font-semibold text-gray-100">
          Payment Successful
        </h2>
        <p className="text-gray-300 mt-2">Thank you for your payment!</p>
        <Link to={"/booking"}>
          <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
            Continue Booking
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PaymentSuccess;
