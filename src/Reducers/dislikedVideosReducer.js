export const dislikedVideosReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DISLIKED_VIDEOS_SUCCESS":
      return {
        ...state,
        loading: false,
        dislikedVideos: [...action.payload.dislikedVideos],
      };

    case "FETCH_DISLIKED_VIDEOS_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
