import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { dislikedVideosReducer } from "../Reducers/dislikedVideosReducer";
import { useAuth } from ".";

const DislikedVideosContext = createContext();

const dislikedVideosInitialState = {
  loading: true,
  error: "",
  dislikedVideos: [],
};

export const DislikedVideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    dislikedVideosReducer,
    dislikedVideosInitialState
  );
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/disliked-videos",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_DISLIKED_VIDEOS_SUCCESS",
            payload: { dislikedVideos: response.data.dislikedVideos },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_DISLIKED_VIDEOS_ERROR" });
      }
    })();
  }, [dispatch, token, state]);

  return (
    <DislikedVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </DislikedVideosContext.Provider>
  );
};

export const useDislikedVideos = () => {
  return useContext(DislikedVideosContext);
};
