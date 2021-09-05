import { useLikedVideos } from "../Contexts";
import { VideoCard } from "../Components";

export const LikedVideos = () => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          Liked Videos
        </h1>
      </div>
      <div>
        {likedVideos.map((video) => {
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
