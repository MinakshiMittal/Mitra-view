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

    case "ADD_TO_DISLIKED_VIDEOS":
      return {
        ...state,
        dislikedVideos: [action.payload.dislikedVideos],
      };

    case "REMOVE_FROM_DISLIKED_VIDEOS":
      return {
        ...state,
        dislikedVideos: [...action.payload.dislikedVideos],
      };

    default:
      return state;
  }
};
