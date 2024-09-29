import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import bannerBG from "../../assets/images/banner-bg.jpg";

import sideImg from "@/assets/images/about-history.jpg";
import OurTeam from "@/components/OurTeam/OurTeam";
import OurFleet from "@/components/OurFleet/OurFleet";
import ValuesCommitment from "@/components/Values&Commitment/ValuesCommitment";
import ContactUs from "@/components/ContactUs/ContactUs";

const AboutPage = () => {
  return (
    <section>
      {/* banner */}
      <div
        style={{ backgroundImage: `url(${bannerBG})` }}
        className="h-[calc(100vh-200px)] bg-cover bg-no-repeat bg-center"
      >
        <div className="bg-black/55 h-full w-full flex items-center">
          <div className="max-w-screen-xl mx-auto w-full space-y-5 px-3 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl text-gray-100 md:text-5xl font-semibold leading-snug md:leading-[60px]">
              About
              <span className="text-orange-500">GearShift</span>
            </h2>
            <p className="text-gray-300 max-w-3xl">
              At Gearshift, we believe that the journey is just as important as
              the destination. That's why we offer a diverse range of
              well-maintained vehicles, from economy to luxury, to match your
              unique travel needs. Whether you're planning a weekend getaway or
              a cross-country adventure, our easy booking process, competitive
              pricing, and top-notch customer service ensure that you drive with
              confidence. Join us on the road, and experience car rental made
              simple, reliable, and tailored to you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        {/* Company History */}
        <div className="py-16 ">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <p
              data-aos="fade-up"
              className="text-orange-500 font-semibold text-sm md:text-lg"
            >
              OUR HISTORY
            </p>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold text-center font-young-serif"
            >
              Our Journey on the Road.
            </h2>
            <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300">
              Gearshift started with a simple idea: to make car rentals easy and
              accessible for everyone. From our humble beginnings with a small
              fleet, we've grown into a trusted name in the industry, known for
              our commitment to quality and customer satisfaction. Over the
              years, we've expanded our services, added more vehicle options,
              and embraced the latest technology to enhance your rental
              experience. Our journey is fueled by a passion for excellence, and
              we're excited to keep driving forward with you.
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 pt-8">
            <div className="space-y-6">
              {/* content */}
              <div>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
                  Foundation and Early Days
                </h3>
                <div className="space-y-2">
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Year Founded: 2010
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Founders: John Smith and Sarah Brown, with a vision to
                    simplify car rentals.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Initial Offerings: Started with a fleet of 10 vehicles
                    focused on local rentals.
                  </p>

                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Milestones: Secured first long-term corporate contract
                    within the first year.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
                  Growth and Expansion
                </h3>
                <div className="space-y-2">
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Fleet Expansion: Grew to 50 vehicles within three years,
                    adding SUVs and luxury cars.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    New Locations: Expanded to three additional cities by 2015.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Service Enhancements: Introduced 24/7 customer support and
                    flexible rental plans.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
                  Technological Advancements
                </h3>
                <div className="space-y-2">
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Booking System: Launched an online booking platform in 2014,
                    followed by a mobile app in 2016.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Innovation: Implemented GPS tracking and contactless pickup
                    options in 2018.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
                  Reputation and Recognition
                </h3>
                <div className="space-y-2">
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Customer Base: Gained a loyal following with over 10,000
                    repeat customers by 2020.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Awards and Accolades: Received "Best Car Rental Service" in
                    2019 from the National Travel Awards.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Customer Feedback: “Gearshift made our trip seamless. The
                    car was spotless, and the service was outstanding!”
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold mb-3">
                  Recent Developments
                </h3>
                <div className="space-y-2">
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Current Operations: Operating with a fleet of over 200
                    vehicles in 10 cities.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Future Plans: Aiming to expand into two new regions and
                    increase eco-friendly options by 2025.
                  </p>
                  <p className=" flex gap-1 text-gray-700 dark:text-gray-300">
                    <IoMdCheckmarkCircleOutline className="text-orange-500 min-w-4" />
                    Sustainability Initiatives: Introduced hybrid and electric
                    vehicles in 2022.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl ">
              <img className="w-full h-full rounded-xl" src={sideImg} alt="" />
            </div>
          </div>
        </div>
        {/* Our Team */}
        <OurTeam />
        {/* Our Fleet */}
        <OurFleet />
        {/* Values & Commitment */}
        <ValuesCommitment />
        {/* Contact Us */}
        <ContactUs />
      </div>
    </section>
  );
};

export default AboutPage;
