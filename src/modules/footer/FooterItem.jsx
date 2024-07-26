import PropTypes from "prop-types";

const FooterItem = (props) => {
  const { name, destination } = props;
  return (
    <div className="w-full mb-3">
      <a href={destination} className="text-neutral-400 underline">
        {name}
      </a>
    </div>
  );
};

FooterItem.propTypes = {
  name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default FooterItem;
