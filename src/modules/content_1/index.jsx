import ContentLayout from "../../common/layouts/ContentLayout";

const Content1 = () => {
  return (
    <ContentLayout
      title={"Nikmati di TV-mu"}
      description={
        "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."
      }
    >
      <div
        className={`relative w-full lg:h-96 relative max-w-lg lg:pl-16 lg:pt-12 overflow-hidden`}
      >
        <video className={`w-full lg:w-[90%]`} autoPlay loop muted playsInline>
          <source src="/videos/video-tv.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src="/images/tv_frame.png"
          alt="TV frame"
          className="absolute inset-0 lg:top-10 lg:left-0 z-20"
        />
      </div>
    </ContentLayout>
  );
};

export default Content1;
