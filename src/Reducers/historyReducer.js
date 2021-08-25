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

    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: [...action.payload.history],
      };

    default:
      return state;
  }
};
