export const VideoPlay = ({ video }) => {
  console.log("play", video);
  return (
    <div>
      <iframe
        style={{ width: "700px", height: "400px" }}
        title="Video"
        src={`https://www.youtube.com/embed/${video?.videoURL}?rel=0&enablejsapi=1`}
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};
