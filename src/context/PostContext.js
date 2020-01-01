import createDataContext from "./createDataContext";
import takApi from "../api/yakApi";
import { navigate } from "../navigationRef";

const postReducer = (state, action) => {
  switch (action.type) {
    case "fetch_posts":
      return { posts: action.payload, error: "" };

    case "create_post":
      return { ...state, posts: state.posts.concat(action.payload), error: "" };

    case "add_error":
      return { ...state, error: action.payload };

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

const createPost = (dispatch) => async ({ authToken, input, location }) => {
  try {
    // Rejects empty inputs
    if (!input.content && !input.image) {
      dispatch({
        type: "add_error",
        payload: "Please input some text or an image."
      });
      return;
    }

    // Create form data object and add fields
    const bodyFormData = new FormData();

    // Add text only if defined
    if (input.content) {
      bodyFormData.append("content", input.content);
    }

    bodyFormData.append("lat", location.latitude);
    bodyFormData.append("lng", location.longitude);

    if (input.image) {
      bodyFormData.append("image", {
        uri: input.image.uri,
        filename: input.image.filename
      });
      console.log("here");
    }

    console.log(bodyFormData);

    // Get response data from request
    const { data } = await takApi("api/yaks", {
      method: "post",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": authToken
      }
    });

    const { newYak } = data;

    dispatch({ type: "create_post", payload: newYak });

    navigate("Posts");
  } catch (err) {
    console.error(err);
  }
};

export const { Provider, Context } = createDataContext(
  postReducer,
  { getPosts, createPost },
  { posts: [], error: "" }
);
