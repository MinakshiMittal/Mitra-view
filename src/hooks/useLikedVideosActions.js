import axios from "axios";
import { useAuth, useLikedVideos, useToast } from "../Contexts";

export const useLikedVideosActions = () => {
  const { token } = useAuth();
  const { dispatch: likedVideosDispatch } = useLikedVideos();
  const { setToastDisplay, setToastMessage } = useToast();

  const addToLikedVideos = async (videoId) => {
    try {
      setToastDisplay("block");
      setToastMessage("Adding To Liked Videos...");
      const response = await axios.post(
        `https://mitra-view.mittalminakshi.repl.co/liked-videos`,
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
        likedVideosDispatch({
          type: "ADD_TO_LIKED_VIDEOS",
          payload: { likedVideos: response.data.library.likedVideos },
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const removeFromLikedVideos = async (videoId) => {
    try {
      const response = await axios.delete(
        `https://mitra-view.mittalminakshi.repl.co/liked-videos/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        likedVideosDispatch({
          type: "REMOVE_FROM_LIKED_VIDEOS",
          payload: { likedVideos: response.data.library.likedVideos },
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return { addToLikedVideos, removeFromLikedVideos };
};
