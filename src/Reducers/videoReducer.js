export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS_SUCCESS":
      return {
        ...state,
        loading: false,
        videos: [...action.payload.videos],
      };

    case "FETCH_VIDEOS_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
