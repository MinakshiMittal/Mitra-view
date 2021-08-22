import { useLikedVideos } from "../Contexts";
import { VideoCard } from "../Components";

export const LikedVideos = () => {
  const {
    state: { likedVideos },
  } = useLikedVideos();
  console.log("liked", likedVideos);
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          Liked Videos
        </h1>
      </div>
      <div>
        {likedVideos.map((video) => {
          console.log("video", video);
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
