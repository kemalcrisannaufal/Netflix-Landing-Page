import LangIcon from "../../assets/lang.svg";

const LanguageSelector = () => {
  return (
    <div className="relative flex items-center justify-center border border-gray-300 rounded lg:w-[200px] bg-transparent px-4 md:px-2 text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0 rounded" />
      <img src={LangIcon} alt="Language Icon" className="z-10" />
      <span className="sm:hidden z-10 text-[10px] ml-4">▼</span>
      <select
        name="lang"
        id="lang"
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer sm:opacity-100 sm:relative sm:inset-auto sm:z-10 bg-transparent border-none outline-none"
      >
        <option value="id" className="text-black">
          Bahasa Indonesia
        </option>
        <option value="en" className="text-black">
          Bahasa Inggris
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
