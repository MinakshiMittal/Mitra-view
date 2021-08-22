export const likedVideosReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LIKED_VIDEOS_SUCCESS":
      return {
        ...state,
        loading: false,
        likedVideos: [...action.payload.likedVideos],
      };

    case "FETCH_LIKED_VIDEOS_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
