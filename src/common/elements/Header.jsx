import NetflixLogo from "../../assets/netflix.svg";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between relative h-[5vh] z-10">
      <div>
        <img src={NetflixLogo} alt="" className="w-24 md:w-36" />
      </div>
      <div className="flex gap-5">
        <LanguageSelector />
        <Button type="button" label="Masuk" />
      </div>
    </div>
  );
};

export default Header;
