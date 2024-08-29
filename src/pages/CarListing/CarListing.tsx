import CarCard from "@/components/CarCard/CarCard";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { TCar } from "@/types/Car.type";

const CarListing = () => {
  const { data: carData, isLoading } = useGetAllCarsQuery(undefined);

  return (
    <section className="min-h-screen max-w-screen-xl mx-auto my-8 px-3 lg:px-0">
      {/* searchNav */}
      <div className="">
        <h1>This is Car lists searchNav</h1>
      </div>

      {/* booking content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {carData?.data?.map((car: TCar) => (
          <div key={car._id}>
            <CarCard car={car} cardType="carListing" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarListing;
