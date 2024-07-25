import ContentWithVideoLayout from "../../common/layouts/ContentVideoLayout";

const Content3 = () => {
  return (
    <ContentWithVideoLayout
      title={"Tonton di mana pun"}
      description={
        "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu."
      }
    >
      <div
        className={`relative w-full h-80 lg:h-96 relative max-w-lg pl-20 pt-8 lg:pl-24 lg:pt-24 overflow-hidden`}
      >
        <video className={`w-[75%]`} autoPlay loop muted playsInline>
          <source src="/videos/video-devices-id.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src="/images/tv_frame_2.png"
          alt="TV frame"
          className="w-full absolute inset-0 lg:top-10 lg:left-0 z-0"
        />
      </div>
    </ContentWithVideoLayout>
  );
};

export default Content3;
