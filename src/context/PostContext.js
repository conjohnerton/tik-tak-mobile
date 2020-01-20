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

    case "add_comment":
      return { ...state };

    case "upvote":
      const newPosts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          return { ...post, upvotes: post.upvotes + 1 };
        }

        return post;
      });

      return { ...state, posts: newPosts };

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

// ! This aint working yet for images
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

    const formData = createFormData(input.image, {
      content: input.content,
      location: { lat: location.latitude, lng: location.longitude }
    });

    // console.log("Woah buddy we area about to make a call.");

    // Get response data from request
    const { data } = await takApi("api/yaks", {
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": authToken
      }
    });

    const { newYak } = data;

    dispatch({ type: "create_post", payload: newYak });

    navigate("Posts");
  } catch (err) {
    console.log(err);
  }
};

const upvote = (dispatch) => async ({ authToken, post }) => {
  const config = {
    headers: {
      "x-auth-token": authToken
    }
  };

  try {
    const response = await takApi.post(`api/yaks/${post._id}/upvote`, config);

    if (!response.data.success) {
      console.log("fail!!!!!!!!");
      dispatch({
        type: "add_error",
        payload: "Could not upvote that post at this time."
      });
      return;
    }

    dispatch({ type: "upvote", payload: post });
  } catch (e) {
    console.log(e);
  }
};

const createComment = (dispatch) => async ({
  authToken,
  comment,
  postToModify
}) => {};

// Helper function for createPost
const createFormData = (image, body) => {
  // Create form data object and add fields
  const bodyFormData = new FormData();

  // Add text if defined
  if (body.content) {
    bodyFormData.append("content", body.content);
  } else {
    bodyFormData.append("content", "ok");
  }

  // ^^^^^ It enters the else when no content is entered
  // maybe the back end is rejecting it because it has an empty content field??
  // internet is annoying at orion :(

  // Add image if defined
  if (image) {
    bodyFormData.append("image", {
      uri: image.base64,
      type: image.type,
      filename: image.filename
    });
  }
  // bodyFormData.append("image", input.image);

  bodyFormData.append("lat", body.location.lat);
  bodyFormData.append("lng", body.location.lng);

  console.log(bodyFormData);
  return bodyFormData;
};

export const { Provider, Context } = createDataContext(
  postReducer,
  { getPosts, createPost, upvote, createComment },
  { posts: [], error: "" }
);
