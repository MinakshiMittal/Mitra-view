import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "../Reducers/videoReducer";

const VideoContext = createContext();

const videoInitialState = {
  loading: true,
  error: "",
  videos: [],
};

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, videoInitialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/videos"
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_VIDEOS_SUCCESS",
            payload: { videos: response.data.videos },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_VIDEOS_ERROR" });
      }
    })();
  }, [dispatch]);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
