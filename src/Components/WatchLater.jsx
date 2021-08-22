import { useWatchLater } from "../Contexts";
import { VideoCard } from "../Components";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useWatchLater();
  console.log("watch", watchLater);
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          Watch Later
        </h1>
      </div>
      <div>
        {watchLater.map((video) => {
          console.log("video", video);
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
