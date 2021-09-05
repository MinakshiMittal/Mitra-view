import { createContext, useContext, useReducer } from "react";
import { likedVideosReducer } from "../Reducers/likedVideosReducer";

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

  return (
    <LikedVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </LikedVideosContext.Provider>
  );
};

export const useLikedVideos = () => {
  return useContext(LikedVideosContext);
};
