import HeroSection from "@/components/HeroSection/HeroSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <WhyChooseUs />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
