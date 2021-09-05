import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../Reducers/historyReducer";

const HistoryContext = createContext();

const historyInitialState = {
  loading: true,
  error: "",
  history: [],
};

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(historyReducer, historyInitialState);

  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  return useContext(HistoryContext);
};
