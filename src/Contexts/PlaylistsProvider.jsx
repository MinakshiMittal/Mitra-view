import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { playlistsReducer } from "../Reducers/playlistsReducer";
import { useAuth } from ".";

const PlaylistsContext = createContext();

const playlistsInitialState = {
  loading: true,
  error: "",
  playlists: [],
};

export const PlaylistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistsReducer, playlistsInitialState);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-view.mittalminakshi.repl.co/playlists",
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_PLAYLISTS_SUCCESS",
            payload: { playlists: response.data.playlist.playlists },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_PLAYLISTS_ERROR" });
      }
    })();
  }, [dispatch, token]);

  return (
    <PlaylistsContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export const usePlaylists = () => {
  return useContext(PlaylistsContext);
};
