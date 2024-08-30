import { TCar } from "@/types/Car.type";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IoIosWarning } from "react-icons/io";

type TCardData = {
  car: TCar;
  cardType: string;
};

const CarCard = ({ car, cardType }: TCardData) => {
  let route;

  if (cardType === "booking") {
    route = `/booking-form/${car?._id}`;
  } else {
    route = `/car-details/${car?._id}`;
  }

  return (
    <div className="h-full rounded-lg shadowGray p-2 hover:scale-[1.01] transition-all duration-300 flex flex-col">
      <div className="flex-grow">
        <div className="w-full h-[220px] overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg md:rounded-l-lg"
            src={car?.image}
            alt={car?.name}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-1 mt-4">
        <div className="space-y-1">
          <h3 className="text-lg text-gray-100 ">{car?.name}</h3>

          <h3 className="text-orange-500 flex items-center gap-1">
            USD
            <span className="text-xl font-semibold">{car?.pricePerHour}</span>
            <span className="flex items-center gap-1">
              / per hour <IoIosWarning />
            </span>
          </h3>
          <p title={car?.description}>
            {car?.description.slice(0, 150)}
            {car?.description.length > 150 ? "..." : ""}
          </p>
        </div>

        <Link to={route}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            {cardType === "booking" ? "Book Now" : "View Details"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
