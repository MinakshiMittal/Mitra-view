import { useWatchLater } from "../Contexts";
import { VideoCard } from "../Components";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useWatchLater();
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
        <h1>Watch Later</h1>
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "1rem",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {watchLater.map((video) => {
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
