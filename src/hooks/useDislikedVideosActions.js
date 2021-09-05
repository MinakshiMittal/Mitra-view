import axios from "axios";
import { useAuth, useDislikedVideos } from "../Contexts";

export const useDislikedVideosActions = () => {
  const { token } = useAuth();
  const { dispatch: dislikedVideosDispatch } = useDislikedVideos();

  const addToDislikedVideos = async (videoId) => {
    try {
      const response = await axios.post(
        `https://mitra-view.mittalminakshi.repl.co/disliked-videos`,
        {
          video: videoId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        dislikedVideosDispatch({
          type: "ADD_TO_DISLIKED_VIDEOS",
          payload: { dislikedVideos: response.data.library.dislikedVideos },
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const removeFromDislikedVideos = async (videoId) => {
    try {
      const response = await axios.delete(
        `https://mitra-view.mittalminakshi.repl.co/disliked-videos/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        dislikedVideosDispatch({
          type: "REMOVE_FROM_DISLIKED_VIDEOS",
          payload: { dislikedVideos: response.data.library.dislikedVideos },
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return { addToDislikedVideos, removeFromDislikedVideos };
};
