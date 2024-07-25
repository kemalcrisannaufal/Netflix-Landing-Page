import FormRegister from "../../common/elements/FormRegister";

const HeroSection = () => {
  return (
    <div className="w-full text-center text-white px-9 md:px-2">
      <h1 className="text-3xl md:text-5xl font-bold">
        Film, acara TV tak terbatas, dan banyak lagi
      </h1>
      <h2 className="mt-5 text-lg md:text-2xl lg:font-medium">
        Tonton di mana pun. Batalkan kapan pun.
      </h2>

      <FormRegister/>
    </div>
  );
};

export default HeroSection;
