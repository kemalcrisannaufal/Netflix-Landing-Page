import PropTypes from "prop-types";

const ContentWithVideoLayout = (props) => {
  const { title, description, children } = props;
  return (
    <div className="w-full bg-black flex flex-col lg:flex-row items-center justify-center gap-5 px-5 py-14 lg:p-20">
      <div className="w-full lg:w-1/2 text-white text-center lg:text-start mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-lg lg:text-xl">
          {description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

ContentWithVideoLayout.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}



export default ContentWithVideoLayout;
