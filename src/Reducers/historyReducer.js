export const historyReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HISTORY_SUCCESS":
      return {
        ...state,
        loading: false,
        history: [...action.payload.history],
      };

    case "FETCH_HISTORY_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
