import GoButton from "../../common/elements/GoButton";
import Input from "../../common/elements/Input";

const HeroSection = () => {
  return (
    <div className="w-full text-center text-white px-9 md:px-2">
      <h1 className="text-3xl md:text-5xl font-bold">
        Film, acara TV tak terbatas, dan banyak lagi
      </h1>
      <h2 className="mt-5 text-lg md:text-2xl lg:font-medium">
        Tonton di mana pun. Batalkan kapan pun.
      </h2>

      <h5 className="mt-5 text-lg md:text-xl">
        Siap menonton? Masukkan email untuk membuat atau memulai lagi
        keanggotaanmu.
      </h5>

      <div className="w-full flex flex-col sm:flex-row gap-5 justify-center items-center mt-5">
        <Input
          type={"email"}
          placeholder={"Alamat Email"}
          name={"user_email"}
        />
        <GoButton type={"button"} label={"Mulai"} />
      </div>
    </div>
  );
};

export default HeroSection;
