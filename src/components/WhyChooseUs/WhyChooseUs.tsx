import { whyChooseUsData } from "@/utils/WhyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-40">
      {/* title and description */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          App Features
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold text-center font-young-serif"
        >
          Why Choose Us?
        </h2>
        <p data-aos="fade-up" className=" text-gray-700 dark:text-gray-300">
          Discover unbeatable rates, a wide vehicle selection, and 24/7 support
          for a seamless car rental experience.
        </p>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {whyChooseUsData?.map((item) => (
          <div
            key={item.id}
            className="rounded-xl p-8 shadowGray transition-shadow duration-300 flex flex-col items-center justify-center gap-4"
          >
            <div className="text-5xl text-gray-700 dark:text-gray-100">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
