import { createContext, useContext, useReducer } from "react";
import { playlistsReducer } from "../Reducers/playlistsReducer";

const PlaylistsContext = createContext();

const playlistsInitialState = {
  loading: true,
  error: "",
  playlists: [],
};

export const PlaylistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistsReducer, playlistsInitialState);

  return (
    <PlaylistsContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export const usePlaylists = () => {
  return useContext(PlaylistsContext);
};
