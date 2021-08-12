import { useVideos } from "../Contexts";
import { VideoCard } from "../Components";

export const VideoListingPage = () => {
  const {
    state: { videos },
  } = useVideos();
  console.log(videos);
  return (
    <>
      {videos.map((video) => {
        return <VideoCard video={video} noDetail key={video._id} />;
      })}
    </>
  );
};
