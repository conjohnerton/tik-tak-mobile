import createDataContext from "./createDataContext";
import takApi from "../api/yakApi";

const postReducer = (state, action) => {};

// Create action functions
const getPosts = (dispatch) => async () => {};

export const { Provider, Context } = createDataContext(postReducer, {}, {});
