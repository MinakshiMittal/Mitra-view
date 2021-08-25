import axios from "axios";
import { useAuth, useHistory } from "../Contexts";

export const useHistoryActions = () => {
  const { token } = useAuth();
  const { dispatch: historyDispatch } = useHistory();

  const addToHistory = async (videoId) => {
    try {
      const response = await axios.post(
        `https://mitra-view.mittalminakshi.repl.co/history`,
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
        historyDispatch({
          type: "ADD_TO_HISTORY",
          payload: { history: response.data.library.history },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToHistory };
};
