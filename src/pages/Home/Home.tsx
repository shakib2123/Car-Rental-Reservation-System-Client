import HeroSection from "@/components/HeroSection/HeroSection";
import Testimonial from "@/components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto md:px-3">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
