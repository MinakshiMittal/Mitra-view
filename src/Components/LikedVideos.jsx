import { useLikedVideos } from "../Contexts";
import { LibraryVideoCard } from "../Components";
import { useLikedVideosActions } from "../hooks/useLikedVideosActions";

export const LikedVideos = () => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
  const { removeFromLikedVideos } = useLikedVideosActions();
  return (
    <>
      <div
        style={{
          color: "white",
          marginLeft: "1rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1>Liked Videos</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "1rem" }}>
        {likedVideos.map((video) => {
          return (
            <LibraryVideoCard
              video={video.video}
              noDetail
              key={video._id}
              removeVideo={removeFromLikedVideos}
            />
          );
        })}
      </div>
    </>
  );
};
