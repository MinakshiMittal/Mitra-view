import { useLikedVideos } from "../Contexts";
import { VideoCard } from "../Components";

export const LikedVideos = () => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
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
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
