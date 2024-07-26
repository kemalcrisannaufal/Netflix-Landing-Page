import footerItems from "../../common/constant/footerItem";
import FooterItem from "./FooterItem";
import LanguageSelector from "../../common/elements/LanguageSelector";

const Footer = () => {
  return (
    <div className="bg-black p-10 lg:px-40 lg:py-20 text-neutral-400">
      <h1 className="font-medium text-md">
        Ada pertanyaan? Hubungi{" "}
        <span className="underline">007-803-321-2148</span>
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 mb-3">
        {footerItems.map((item, index) => (
          <FooterItem
            key={index}
            name={item.name}
            destination={item.destination}
          />
        ))}
      </div>

      <LanguageSelector/>
      <h5 className="mt-4 text-neutral-400">Netflix Indonesia</h5>
    </div>
  );
};

export default Footer;
