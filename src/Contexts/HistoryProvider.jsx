import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { historyReducer } from "../Reducers/historyReducer";
import { useAuth } from ".";

const HistoryContext = createContext();

const historyInitialState = {
  loading: true,
  error: "",
  history: [],
};

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(historyReducer, historyInitialState);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/history",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_HISTORY_SUCCESS",
            payload: { history: response.data.history },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_HISTORY_ERROR" });
      }
    })();
  }, [dispatch, token]);

  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  return useContext(HistoryContext);
};
