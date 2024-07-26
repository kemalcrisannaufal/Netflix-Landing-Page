import PropTypes from "prop-types";

const ContentWithImageLayout = (props) => {
  const { title, image, description, classname } = props;
  return (
    <div className="w-full bg-black flex flex-col lg:flex-row items-center justify-center gap-5 px-5 py-14 lg:py-20 lg:px-40">
      <div className="hidden lg:block w-full lg:w-1/2 flex justify-center items-center">
        <img src={image} alt="image" className={`h-72 lg:h-96 ${classname}`} />
      </div>
      <div className="w-full lg:w-1/2 text-white text-center lg:text-start mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-lg lg:text-xl">{description}</p>
      </div>
      <div className="w-full flex justify-center items-center lg:hidden">
        <img src={image} alt="image" className={`h-72 lg:h-96 ${classname}`} />
      </div>
    </div>
  );
};

ContentWithImageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default ContentWithImageLayout;
