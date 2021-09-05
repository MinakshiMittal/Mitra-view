import { useHistory } from "../Contexts";
import { VideoCard } from "../Components";

export const History = () => {
  const {
    state: { history },
  } = useHistory();
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          History
        </h1>
      </div>
      <div>
        {history.map((video) => {
          return <VideoCard video={video.video} noDetail key={video._id} />;
        })}
      </div>
    </>
  );
};
