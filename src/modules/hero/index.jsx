import Header from "../../common/elements/Header";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="hero w-full h-[90vh] sm:h-[75vh] lg:min-h-screen pt-6 px-5 lg:px-36 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-shadow" />
        <Header />
        <div className="mt-10 w-full flex flex-col justify-center items-center relative sm:h-[80%] lg:h-[80%]">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
