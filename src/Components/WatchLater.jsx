import { useWatchLater } from "../Contexts";
import { LibraryVideoCard } from "../Components";
import { useWatchLaterActions } from "../hooks/useWatchLaterActions";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useWatchLater();
  const { removeFromWatchLater } = useWatchLaterActions();
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
          return (
            <LibraryVideoCard
              video={video.video}
              noDetail
              key={video._id}
              removeVideo={removeFromWatchLater}
            />
          );
        })}
      </div>
    </>
  );
};
