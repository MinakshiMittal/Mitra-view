import { createContext, useContext, useReducer } from "react";
import { dislikedVideosReducer } from "../Reducers/dislikedVideosReducer";

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

  return (
    <DislikedVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </DislikedVideosContext.Provider>
  );
};

export const useDislikedVideos = () => {
  return useContext(DislikedVideosContext);
};
