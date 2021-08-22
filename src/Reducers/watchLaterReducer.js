export const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WATCH_LATER_SUCCESS":
      return {
        ...state,
        loading: false,
        watchLater: [...action.payload.watchLater],
      };

    case "FETCH_WATCH_LATER_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
