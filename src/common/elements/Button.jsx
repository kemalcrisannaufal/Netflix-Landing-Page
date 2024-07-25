import PropTypes from "prop-types";

const Button = (props) => {
  const { type = "submit", classname, label } = props;
  return (
    <button
      type={type}
      className={`bg-red-netflix text-white text-md font-medium px-3 py-1 rounded ${classname}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  classname: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Button;
