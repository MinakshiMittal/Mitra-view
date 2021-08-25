import { useDislikedVideos, useLikedVideos } from "../Contexts";
import { useLikedVideosActions } from "../hooks/useLikedVideosActions";
import { useDislikedVideosActions } from "../hooks/useDislikedVideosActions";

export const VideoPlay = ({ video }) => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
  const {
    state: { dislikedVideos },
  } = useDislikedVideos();
  const {
    state: { watchLater },
  } = watc;
  const { removeFromLikedVideos, addToLikedVideos } = useLikedVideosActions();
  const { removeFromDislikedVideos, addToDislikedVideos } =
    useDislikedVideosActions();

  const isVideoLiked = () => {
    return (
      likedVideos?.find((likedVideo) => likedVideo.video._id === video._id) !==
      undefined
    );
  };

  console.log(dislikedVideos);

  const isVideoDisliked = () => {
    return (
      dislikedVideos?.find(
        (dislikedVideo) => dislikedVideo.video._id === video._id
      ) !== undefined
    );
  };

  console.log("play", video);
  return (
    <div
      style={{
        margin: "5vh auto 0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <iframe
        style={{ width: "700px", height: "400px" }}
        title="Video"
        src={`https://www.youtube.com/embed/${video?.videoURL}?rel=0&enablejsapi=1`}
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <i
        className={!isVideoLiked() ? "far fa-thumbs-up" : "fas fa-thumbs-up"}
        onClick={() => {
          isVideoLiked()
            ? removeFromLikedVideos(video._id)
            : addToLikedVideos(video._id);
        }}
      ></i>
      <i
        className={
          !isVideoDisliked() ? "far fa-thumbs-down" : "fas fa-thumbs-down"
        }
        onClick={() => {
          isVideoDisliked()
            ? removeFromDislikedVideos(video._id)
            : addToDislikedVideos(video._id);
        }}
      ></i>
      <i className="far fa-clock"></i>
    </div>
  );
};
