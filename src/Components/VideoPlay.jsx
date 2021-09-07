import { useDislikedVideos, useLikedVideos, useWatchLater } from "../Contexts";
import { useLikedVideosActions } from "../hooks/useLikedVideosActions";
import { useDislikedVideosActions } from "../hooks/useDislikedVideosActions";
import { useWatchLaterActions } from "../hooks/useWatchLaterActions";
import { PlaylistModal, PlaylistIcon } from "../Components";
import { useState } from "react";
import "./VideoCard/VideoCard.css";

export const VideoPlay = ({ video }) => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
  const {
    state: { dislikedVideos },
  } = useDislikedVideos();

  const {
    state: { watchLater },
  } = useWatchLater();

  const { removeFromLikedVideos, addToLikedVideos } = useLikedVideosActions();
  const { removeFromDislikedVideos, addToDislikedVideos } =
    useDislikedVideosActions();
  const { removeFromWatchLater, addToWatchLater } = useWatchLaterActions();
  const [display, setDisplay] = useState("none");

  const isVideoLiked = () => {
    return (
      likedVideos?.find(
        (likedVideo) => likedVideo.video?._id === video?._id
      ) !== undefined
    );
  };

  const isVideoInWatchLater = () => {
    return (
      watchLater?.find(
        (watchLaterVideo) => watchLaterVideo.video?._id === video?._id
      ) !== undefined
    );
  };

  const isVideoDisliked = () => {
    return (
      dislikedVideos?.find(
        (dislikedVideo) => dislikedVideo.video?._id === video?._id
      ) !== undefined
    );
  };

  const likeHandler = async (event) => {
    event.preventDefault();
    if (isVideoLiked()) {
      return removeFromLikedVideos(video?._id);
    }
    if (isVideoDisliked()) {
      await removeFromDislikedVideos(video?._id);
    }
    addToLikedVideos(video?._id);
  };

  const dislikeHandler = async (event) => {
    event.preventDefault();
    if (isVideoDisliked()) {
      return removeFromDislikedVideos(video?._id);
    }
    if (isVideoLiked()) {
      await removeFromLikedVideos(video?._id);
    }
    addToDislikedVideos(video?._id);
  };

  return (
    <>
      <div
        style={{
          margin: "5vh auto 0 auto",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "4rem",
        }}
      >
        <iframe
          style={{ width: "700px", height: "400px" }}
          title="Video"
          src={`https://www.youtube.com/embed/${video?.videoURL}?rel=0&enablejsapi=1`}
          allow="autoplay"
          allowFullScreen
        ></iframe>
        <h1 style={{ color: "#ffffff" }}>{video?.name}</h1>
        <div className="video-actions-container">
          <i
            title="Like"
            className={
              !isVideoLiked() ? "far fa-thumbs-up" : "fas fa-thumbs-up"
            }
            onClick={likeHandler}
          ></i>
          <i
            title="Dislike"
            className={
              !isVideoDisliked() ? "far fa-thumbs-down" : "fas fa-thumbs-down"
            }
            onClick={dislikeHandler}
          ></i>
          <i
            title="Watch Later"
            className={!isVideoInWatchLater() ? "far fa-clock" : "fas fa-clock"}
            onClick={() =>
              isVideoInWatchLater()
                ? removeFromWatchLater(video?._id)
                : addToWatchLater(video?._id)
            }
          ></i>

          <PlaylistIcon
            style={{ position: "relative", color: "white" }}
            setDisplay={setDisplay}
            display={display}
          />
          {display === "block" && (
            <PlaylistModal video={video} display={display} />
          )}
        </div>
      </div>
    </>
  );
};
