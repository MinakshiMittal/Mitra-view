export const playlistsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PLAYLISTS_SUCCESS":
      return {
        ...state,
        loading: false,
        playlists: [...action.payload.playlists],
      };

    case "FETCH_PLAYLISTS_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
