import { useParams } from "react-router-dom";
import { VideoCard } from "../Components/index";
import { useVideos } from "../Contexts";

export const VideoDetail = () => {
  const {
    state: { videos },
  } = useVideos();
  const { videoId } = useParams();
  const video = videos?.find((video) => video._id === videoId);

  return (
    <>
      <VideoCard video={video} />
    </>
  );
};
