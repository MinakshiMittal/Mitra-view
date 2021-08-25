import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { likedVideosReducer } from "../Reducers/likedVideosReducer";
import { useAuth } from ".";

const LikedVideosContext = createContext();

const likedVideosInitialState = {
  loading: true,
  error: "",
  likedVideos: [],
};

export const LikedVideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    likedVideosReducer,
    likedVideosInitialState
  );
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/liked-videos",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_LIKED_VIDEOS_SUCCESS",
            payload: { likedVideos: response.data.likedVideos },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_LIKED_VIDEOS_ERROR" });
      }
    })();
  }, [dispatch, token, state]);

  return (
    <LikedVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </LikedVideosContext.Provider>
  );
};

export const useLikedVideos = () => {
  return useContext(LikedVideosContext);
};
