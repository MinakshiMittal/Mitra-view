import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../Reducers/watchLaterReducer";

const WatchLaterContext = createContext();

const watchLaterInitialState = {
  loading: true,
  error: "",
  watchLater: [],
};

export const WatchLaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    watchLaterReducer,
    watchLaterInitialState
  );

  return (
    <WatchLaterContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => {
  return useContext(WatchLaterContext);
};
