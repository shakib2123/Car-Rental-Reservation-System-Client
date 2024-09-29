import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { TCar } from "@/types/Car.type";
import CarCard from "../CarCard/CarCard";

const FeaturedSection = () => {
  const { data: carData } = useGetAllCarsQuery(undefined);

  return (
    <section className="pt-16 pb-24 md:py-24">
      {/* title and description */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          Featured Cars
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold text-center font-young-serif"
        >
          Our Best Offers
        </h2>
        <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300 ">
          Take a look at our best deals on high-demand cars. These featured
          vehicles come with outstanding features, competitive pricing, and are
          ready to hit the road whenever you are.
        </p>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carData?.data?.slice(0, 6).map((car: TCar) => (
          <div key={car._id}>
            <CarCard cardType="carListing" car={car} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
