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

    case "ADD_TO_LIKED_VIDEOS":
      console.log("reducer", action.payload.likedVideos);
      return {
        ...state,
        likedVideos: [...action.payload.likedVideos],
      };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: [...action.payload.likedVideos],
      };

    default:
      return state;
  }
};
