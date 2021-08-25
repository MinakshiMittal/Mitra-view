import axios from "axios";
import { useAuth, useWatchLater } from "../Contexts";

export const useWatchLaterActions = () => {
  const { token } = useAuth();
  const { dispatch: watchLaterDispatch } = useWatchLater();

  const addToWatchLater = async (videoId) => {
    try {
      const response = await axios.post(
        `https://mitra-view.mittalminakshi.repl.co/watch-later`,
        {
          video: videoId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("add", response);

      if (response.status === 200) {
        likedVideosDispatch({
          type: "ADD_TO_WATCH_LATER",
          payload: { watchLater: response.data.library.watchLater },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWatchLater = async (videoId) => {
    try {
      const response = await axios.delete(
        `https://mitra-view.mittalminakshi.repl.co/watch-later/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("remove", response);

      if (response.status === 200) {
        watchLaterDispatch({
          type: "REMOVE_FROM_WATCH_LATER",
          payload: { watchLater: response.data.library.watchLater },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToWatchLater, removeFromWatchLater };
};
