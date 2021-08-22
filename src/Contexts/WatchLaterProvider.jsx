import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { watchLaterReducer } from "../Reducers/watchLaterReducer";
import { useAuth } from ".";

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
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/watch-later",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_WATCH_LATER_SUCCESS",
            payload: { watchLater: response.data.watchLater },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_WATCH_LATER_ERROR" });
      }
    })();
  }, [dispatch, token]);

  return (
    <WatchLaterContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => {
  return useContext(WatchLaterContext);
};
