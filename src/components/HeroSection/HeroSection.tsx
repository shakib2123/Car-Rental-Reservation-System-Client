import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Inputs = {
  searchValue: string;
};

const HeroSection = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="h-[calc(100vh-70px)] bg-bannerBg bg-cover bg-no-repeat bg-center">
      <div className="bg-black/55 h-full w-full flex items-center">
        <div className="max-w-screen-xl mx-auto w-full space-y-5 px-3">
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug md:leading-[60px]">
            Explore the Road Ahead <br /> with{" "}
            <span className="text-orange-500">GearShift</span> Rentals
          </h2>
          <p className="text-gray-300 max-w-xl">
            Hit the road with ease. Whether for a getaway or business, our
            diverse fleet has you covered. Book now for great prices, flexible
            options, and exceptional service. Your journey starts here!
          </p>
          <div className="flex items-center gap-4">
            <Button className="w-40 h-12 bg-orange-500 hover:bg-orange-600">
              Book Now
            </Button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full max-w-sm items-center"
            >
              <Input
                {...register("searchValue")}
                type="text"
                placeholder="Search based on location or dates"
                className="outline-none h-12 bg-white text-black focus-visible:ring-offset-0 placeholder:text-black rounded-r-none"
              />
              <Button
                type="submit"
                className="h-12 bg-orange-500 hover:bg-orange-600 rounded-l-none"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
