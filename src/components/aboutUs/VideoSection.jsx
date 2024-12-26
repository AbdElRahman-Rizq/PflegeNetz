const VideoSection = ({ videoSrc, altText }) => {
  return (
    <div className="relative max-w-3xl px-5 md:px-0 mb-20 mx-auto animations">
      <div>
        <video
          controls
          src={videoSrc}
          title={altText}
          className="w-full h-full rounded-lg"
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;
