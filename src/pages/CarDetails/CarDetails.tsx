import { useGetSingleCarQuery } from "@/redux/features/car/carApi";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ImageMagnifier.css";
import { Rating } from "@smastrom/react-rating";
import { IoIosWarning, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/redux/hook";
import { setOptions } from "@/redux/features/car/carSlice";

const CarDetails = () => {
  const { id } = useParams();

  const { data: carData, isLoading } = useGetSingleCarQuery(id);
  console.log(carData);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [insurance, setInsurance] = useState("");
  const [GPS, setGPS] = useState(false);
  const [childSeat, setChildSeat] = useState(false);

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    // Corrected the usage of getBoundingClientRect
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    const cursorX = e.pageX - left - window.scrollX;
    const cursorY = e.pageY - top - window.scrollY;

    setPosition({ x, y });

    setCursorPosition({ x: cursorX, y: cursorY });
  };

  const handleBooking = () => {
    const bookingData = {
      insurance,
      GPS,
      childSeat,
    };

    dispatch(setOptions(bookingData));
    navigate(`/booking`);
  };

  return (
    <section className="max-w-screen-xl mx-auto my-16 px-3 flex flex-col lg:flex-row  gap-12 ">
      <div
        className="flex-[2] h-[450px] w-full lg:max-w-[650px] img-magnifier-container "
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseHover}
      >
        <img
          className="rounded-2xl magnifier-img w-full h-full object-cover"
          src={carData?.data?.image}
          alt=""
        />
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: `${cursorPosition.x - 100}px`,
              top: `${cursorPosition.y - 100}px`,
              pointerEvents: "none",
              width: "200px",
              height: "200px",
              border: "2px solid #fff",
              borderRadius: "10px",
              backgroundImage: `url(${carData?.data?.image})`,

              backgroundSize: "700%",
              backgroundPosition: `${position.x}% ${position.y}%`,
              zIndex: 10,
            }}
          ></div>
        )}
      </div>
      <div className="flex-1 w-full min-h-[600px] shadow-custom-light p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="max-w-40 flex gap-1">
            Reviews: <Rating className="size-6 w-fit" value={3} />
          </div>
        </div>
        <div className="py-4 border-b-2 border-gray-800  space-y-2">
          <h2 className="text-3xl font-semibold text-gray-100">
            {carData?.data?.name}
          </h2>

          <h3 className="text-orange-500 flex items-center gap-1">
            USD
            <span className="text-xl font-semibold">
              {carData?.data?.pricePerHour}
            </span>
            <span className="flex items-center gap-1">
              / per hour <IoIosWarning />
            </span>
          </h3>
          <p className="text-gray-300">{carData?.data?.description}</p>
        </div>
        <div className="py-4 ">
          {/* features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">
              Features:
            </h3>
            {carData?.data?.features?.[0].split(",").map((feature: string) => (
              <p className=" flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-orange-500" />

                {feature}
              </p>
            ))}
          </div>
        </div>
        {/* Specifications */}
        <div className="py-4 border-y space-y-4">
          <h3 className="text-xl font-semibold text-gray-100 mb-1">
            Specifications:
          </h3>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Name <span>{carData?.data?.name}</span>
          </p>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Model <span>{carData?.data?.model}</span>
          </p>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Color <span>{carData?.data?.color}</span>
          </p>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Fuel{" "}
            <span>
              {carData?.data?.isElectric ? "Electric" : "Non-electric"}
            </span>
          </p>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Year <span>{carData?.data?.year}</span>
          </p>
          <p className="text-gray-300 p-4 bg-second flex items-center justify-between w-full rounded-xl">
            Location <span>{carData?.data?.location}</span>
          </p>
        </div>

        {/* Options to choose additional features */}
        <div className="py-4 border-y">
          <h3 className="text-xl font-semibold text-gray-100 mb-3">
            Choose additional options:
          </h3>
          {/* choose insurance option */}
          <div className="space-y-3">
            <Select onValueChange={(field) => setInsurance(field)}>
              <SelectTrigger className="w-full focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a insurance option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="w-full max-w-[300px]: overflow-hidden">
                  <SelectItem
                    className="w-full max-w-[300px]: overflow-hidden"
                    value="Basic Insurance"
                  >
                    Basic Insurance
                  </SelectItem>
                  <SelectItem
                    className="w-full max-w-[300px]: overflow-hidden"
                    value="Standard Insurance"
                  >
                    Standard Insurance
                  </SelectItem>
                  <SelectItem
                    className="w-full max-w-[300px]: overflow-hidden"
                    value="Premium Insurance"
                  >
                    Premium Insurance
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* choose gps option */}
            <Select onValueChange={(field) => setGPS(Boolean(field))}>
              <SelectTrigger className="w-full focus-visible:ring-offset-0">
                <SelectValue placeholder="Select GPS" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="w-full max-w-[300px]: overflow-hidden">
                  <SelectItem
                    className="w-full max-w-[300px]: overflow-hidden"
                    value="true"
                  >
                    GPS
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* choose child seat option */}
            <Select onValueChange={(field) => setChildSeat(Boolean(field))}>
              <SelectTrigger className="w-full focus-visible:ring-offset-0">
                <SelectValue placeholder="Select Child Seat" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="w-full max-w-[300px]: overflow-hidden">
                  <SelectItem
                    className="w-full max-w-[300px]: overflow-hidden"
                    value="true"
                  >
                    Child Seat
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* availability */}
        <div className="pt-4 ">
          <h3 className="text-xl font-semibold text-gray-100 mb-1">
            Availability:{" "}
            {carData?.data?.status === "available" ? (
              <span className="text-green-500">Available</span>
            ) : (
              <span className="text-red-500">Not Available</span>
            )}
          </h3>
        </div>

        <Button
          onClick={() => handleBooking(carData?.data?._id)}
          disabled={carData?.data?.status !== "available"}
          className="w-full  bg-orange-500 hover:bg-orange-600 mt-4"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default CarDetails;
