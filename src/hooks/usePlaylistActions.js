import axios from "axios";
import { useAuth, usePlaylists } from "../Contexts";

export const usePlaylistsActions = () => {
  const { token } = useAuth();
  const { dispatch: playlistsDispatch } = usePlaylists();

  const addPlaylist = async (videoId) => {
    try {
      const response = await axios.post(
        `https://mitra-view.mittalminakshi.repl.co/playlists`,
        {
          video: videoId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        playlistsDispatch({
          type: "ADD_TO_PLAYLIST",
          payload: { playlist: response.data.playlist },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removePlaylist = async (videoId) => {
    try {
      const response = await axios.delete(
        `https://mitra-view.mittalminakshi.repl.co/playlists/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        playlistsDispatch({
          type: "REMOVE_FROM_PLAYLISTS",
          payload: { playlists: response.data.playlists },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addPlaylist, removePlaylist };
};
