import { useHistory } from "../Contexts";
import { VideoCard } from "../Components";

export const History = () => {
  const {
    state: { history },
  } = useHistory();
  console.log("liked", history);
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          History
        </h1>
      </div>
      <div>
        {history.map((video) => {
          console.log("video", video);
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
