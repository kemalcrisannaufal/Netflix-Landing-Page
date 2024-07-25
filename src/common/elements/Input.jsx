import { useState } from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type, name, placeholder, classname } = props;
  const [hasText, setHasText] = useState(false);

  const handleInputChange = (e) => {
    setHasText(e.target.value !== "");
  };

  return (
    <div className="w-full sm:w-[440px] h-12 md:h-14 relative">
      <div className="absolute inset-0 bg-black z-0 opacity-40" />
      <input
        name={name}
        id={name}
        className={`w-full h-full border bg-transparent px-3 pt-4 pb-2 rounded-md relative z-10 focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${classname}`}
        type={type}
        onChange={handleInputChange}
        onFocus={() => setHasText(true)}
        onBlur={(e) => setHasText(e.target.value !== "")}
      />

      <label
        htmlFor={name}
        className={`absolute  left-3 top-3 md:top-4 transition-all duration-300 ease-in-out z-10 ${
          hasText
            ? "transform -translate-y-3 -translate-x-3 scale-75 text-neutral-500 font-medium"
            : ""
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default Input;
