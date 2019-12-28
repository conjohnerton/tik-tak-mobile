import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "save_current_location":
      return { currentLocation: action.payload };

    default:
      return state;
  }
};

const saveCurrentLocation = (dispatch) => (location) => {
  dispatch({ type: "save_current_location", payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { saveCurrentLocation },
  { currentLocation: null }
);
