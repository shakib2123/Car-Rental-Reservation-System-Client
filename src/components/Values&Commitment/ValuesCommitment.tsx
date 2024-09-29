const commitmentData = [
  {
    id: 1,
    title: "Empathy",
    desc: "We deeply understand and value the needs and experiences of our customers. By putting ourselves in your shoes, we ensure that our services are tailored to meet your individual needs and exceed your expectations.",
  },
  {
    id: 2,
    title: "Focus",
    desc: "Our commitment to excellence drives us to concentrate on what truly matters: delivering a seamless and reliable car rental experience. We stay attentive to every detail, ensuring that every aspect of our service is meticulously managed for your satisfaction.",
  },
  {
    id: 3,
    title: "Curiosity",
    desc: "We embrace a mindset of continual learning and exploration. By staying curious and open to new ideas, we constantly seek innovative solutions and improvements to enhance our services and adapt to evolving customer needs.",
  },
  {
    id: 4,
    title: "Quality",
    desc: "We are dedicated to maintaining the highest standards in everything we do. From our meticulously maintained vehicles to our attentive customer service, quality is at the heart of our operations, ensuring a superior and dependable experience for every journey.",
  },
];

const ValuesCommitment = () => {
  return (
    <section className="my-20 lg:my-28 max-w-screen-xl mx-auto px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          WHAT WE ARE LOOKING FOR
        </p>
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold text-center font-young-serif"
        >
          Our Values & Commitment
        </h2>
        <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300">
          At Gearshift, our core values are the foundation of everything we do.
          We are dedicated to delivering exceptional service while upholding the
          highest standards of integrity, quality, and responsibility. Our
          commitment to you is reflected in every aspect of our business, from
          our customer-centric approach and transparent practices to our
          continuous innovation and sustainable efforts. We take pride in being
          a trustworthy partner, providing reliable vehicles, and contributing
          positively to the communities we serve. Discover how our values drive
          us to exceed your expectations and ensure your journey with Gearshift
          is always exceptional.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {commitmentData.map((data) => (
          <div
            key={data.id}
            className="text-center shadowGray rounded-xl p-6 transition-shadow duration-300 space-y-4"
          >
            <h3 className="text-xl text-gray-900 dark:text-gray-100 font-bold">
              {data.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesCommitment;
