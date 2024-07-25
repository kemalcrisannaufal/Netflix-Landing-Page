import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const GoButton = (props) => {
  const { type = "button", label, classname } = props;
  return (
    <button
      type={type}
      className={`flex items-center bg-red-600 text-white text-xl md:text-2xl font-medium rounded-md px-4 py-2 md:px-6 md:py-4 bg-red-netflix h-12 md:h-14 ${classname}`}
    >
      <div className="flex items-center gap-3">
        <p>{label}</p>
        <FaChevronRight />
      </div>
    </button>
  );
};

GoButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default GoButton;
