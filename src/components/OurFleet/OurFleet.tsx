import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import fleetImg from "../../assets/images/car-fleet.jpg";

const OurFleet = () => {
  return (
    <section className="my-20 lg:my-28 max-w-screen-xl mx-auto px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          OUR FLEET
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold text-center font-young-serif"
        >
          The Gearshift Fleet
        </h2>
        <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300">
          Explore a diverse selection of vehicles tailored to suit every
          journey. Whether you're looking for a compact car for city driving, a
          spacious SUV for a family road trip, or a luxury vehicle for a special
          occasion, our fleet offers something for everyone. Each vehicle is
          meticulously maintained, ensuring reliability and comfort on every
          drive. With Gearshift, you can find the perfect ride to match your
          needs, style, and budget.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 pt-8">
        <div className="h-full w-full lg:w-fit">
          <img className="w-full h-full rounded-xl" src={fleetImg} alt="" />
        </div>
        <div className="space-y-6">
          {/* content */}
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
              Economy Cars
            </h3>
            <div className="space-y-2">
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Overview: Perfect for budget-conscious drivers, our economy cars
                are ideal for city travel and short trips.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Ideal For: Solo travelers, couples, those looking for affordable
                options.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Key Features: Compact size, fuel-efficient, easy to park.
              </p>

              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Example Models: Toyota Corolla, Honda Civic, Nissan Sentra.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
              Luxury Cars
            </h3>
            <div className="space-y-2">
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Overview: Experience the pinnacle of comfort and style with our
                luxury car selection.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Ideal For: Business professionals, special occasions, anyone
                wanting a high-end experience.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Key Features: Premium interiors, cutting-edge technology,
                superior ride quality.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Example Models: Mercedes-Benz E-Class, BMW 5 Series, Audi A6.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
              SUVs
            </h3>
            <div className="space-y-2">
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Overview: Our SUVs offer the perfect balance of space, power,
                and versatility for any adventure.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Ideal For: Families, outdoor enthusiasts, long-distance
                travelers.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Example Models: Ford Explorer, Toyota Highlander, Jeep Grand
                Cherokee.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
              Vans and Minivans
            </h3>
            <div className="space-y-2">
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Overview: Traveling with a group? Our vans and minivans provide
                the space and comfort you need.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Example Models: Honda Odyssey, Chrysler Pacifica, Ford Transit.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Ideal For: Large families, group travel, moving lots of gear.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Key Features: Flexible seating, large cargo areas, entertainment
                systems.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
              Convertibles
            </h3>
            <div className="space-y-2">
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Overview: Enjoy the thrill of the open road with our selection
                of stylish convertibles.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Ideal For: Couples, vacationers, anyone seeking a fun, stylish
                ride.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Key Features: Retractable roofs, sporty performance, sleek
                designs.
              </p>
              <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                Example Models: Ford Mustang Convertible, Mazda MX-5 Miata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFleet;
