import createDataContext from "./createDataContext";
import takApi from "../api/yakApi";

const postReducer = (state, action) => {
  switch (action.type) {
    case "fetch_posts":
      return { posts: action.payload };

    default:
      return state;
  }
};

// Create action functions
const getPosts = (dispatch) => async ({ token, lat, lng }) => {
  try {
    // Sets header and query params
    const config = {
      headers: {
        "x-auth-token": token
      },
      params: {
        lat: lat,
        lng: lng
      }
    };

    // Fetch yaks and add to state
    const response = await takApi.get("api/yaks", config);
    dispatch({ type: "fetch_posts", payload: response.data.yaks });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "We couldn't get all the posts in your area, try again later!"
    });
  }
};

export const { Provider, Context } = createDataContext(
  postReducer,
  { getPosts },
  { posts: [] }
);
