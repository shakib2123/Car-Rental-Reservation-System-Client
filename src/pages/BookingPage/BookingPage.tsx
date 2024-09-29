import CarCard from "@/components/CarCard/CarCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

import { useGetAllCarsQuery } from "@/redux/features/car/carApi";

import { TCar } from "@/types/Car.type";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const BookingPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const searchableValue = searchParams.get("searchValue");

  const [searchValue, setSearchValue] = useState(searchableValue || "");
  const [carType, setCarType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { register, handleSubmit } = useForm<{ searchValue: string }>();

  const onSubmit: SubmitHandler<{ searchValue: string }> = (data) => {
    setSearchValue(data.searchValue);
  };

  const { data: carData } = useGetAllCarsQuery({
    searchValue,
    carType,
    minPrice,
    maxPrice,
  });
  return (
    <section className="min-h-screen max-w-screen-xl mx-auto my-8 px-3 lg:px-0">
      {/* searchNav */}
      <section className="flex flex-col md:flex-row items-center gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full  max-w-sm items-center"
        >
          <Input
            className="focus-visible:ring-offset-0 rounded-r-none"
            type="text"
            placeholder="Search here..."
            {...register("searchValue")}
          />
          <Button
            className="bg-second hover:bg-second/80 rounded-l-none"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Button>
        </form>
        <div className="flex items-center gap-4">
          {/* car type */}
          <div className="grid items-center gap-1.5">
            <Select onValueChange={(field) => setCarType(field)}>
              <SelectTrigger className="w-44 md:w-80 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a car type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"hybrid"}>Hybrid</SelectItem>
                  <SelectItem value={"sedan"}>Sedan</SelectItem>
                  <SelectItem value={"SUV"}>SUV</SelectItem>
                  <SelectItem value={"sports"}>Sports</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* price range */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Price Range</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full md:w-40 px-3 py-2 space-y-3">
                <div className="flex items-center gap-2">
                  <Label htmlFor="min" className="">
                    Min:
                  </Label>
                  <Input
                    id="min"
                    onChange={(e) => setMinPrice(e.target.value)}
                    className=""
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="max" className="">
                    Max:
                  </Label>
                  <Input
                    id="max"
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className=""
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* booking content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {carData?.data?.map((car: TCar) => (
          <div key={car._id}>
            <CarCard car={car} cardType="booking" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingPage;
