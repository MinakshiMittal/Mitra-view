import {
  useAuth,
  useDislikedVideos,
  useHistory,
  useLikedVideos,
  usePlaylists,
  useWatchLater,
} from "../Contexts";
import axios from "axios";
import { useEffect } from "react";

export const useDataLoading = () => {
  const { token } = useAuth();
  const { dispatch: dislikedVideosDispatch, state: dislikedVideosState } =
    useDislikedVideos();
  const { dispatch: historyDispatch, state: historyState } = useHistory();
  const { dispatch: playlistsDispatch, state: playlistsState } = usePlaylists();
  const { dispatch: watchLaterDispatch, state: watchLaterState } =
    useWatchLater();
  const { dispatch: likedVideosDispatch, state: likedVideosState } =
    useLikedVideos();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-view.mittalminakshi.repl.co/disliked-videos",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            dislikedVideosDispatch({
              type: "FETCH_DISLIKED_VIDEOS_SUCCESS",
              payload: { dislikedVideos: response.data.dislikedVideos },
            });
          }
        } catch (error) {
          dislikedVideosDispatch({ type: "FETCH_DISLIKED_VIDEOS_ERROR" });
        }
      }
    })();
  }, [dislikedVideosDispatch, token, dislikedVideosState]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-view.mittalminakshi.repl.co/history",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            historyDispatch({
              type: "FETCH_HISTORY_SUCCESS",
              payload: { history: response.data.history },
            });
          }
        } catch (error) {
          historyDispatch({ type: "FETCH_HISTORY_ERROR" });
        }
      }
    })();
  }, [historyDispatch, token, historyState]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-view.mittalminakshi.repl.co/playlists",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            playlistsDispatch({
              type: "FETCH_PLAYLISTS_SUCCESS",
              payload: { playlists: response.data.playlist.playlists },
            });
          }
        } catch (error) {
          playlistsDispatch({ type: "FETCH_PLAYLISTS_ERROR" });
        }
      }
    })();
  }, [playlistsDispatch, token, playlistsState]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-view.mittalminakshi.repl.co/watch-later",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            watchLaterDispatch({
              type: "FETCH_WATCH_LATER_SUCCESS",
              payload: { watchLater: response.data.watchLater },
            });
          }
        } catch (error) {
          watchLaterDispatch({ type: "FETCH_WATCH_LATER_ERROR" });
        }
      }
    })();
  }, [watchLaterDispatch, token, watchLaterState]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get(
            "https://mitra-view.mittalminakshi.repl.co/liked-videos",
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 200) {
            likedVideosDispatch({
              type: "FETCH_LIKED_VIDEOS_SUCCESS",
              payload: { likedVideos: response.data.likedVideos },
            });
          }
        } catch (error) {
          likedVideosDispatch({ type: "FETCH_LIKED_VIDEOS_ERROR" });
        }
      }
    })();
  }, [likedVideosDispatch, token, likedVideosState]);
};
