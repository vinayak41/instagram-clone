import { SET_ALL_POSTS } from "../typeConstants/postTypeConstants";

const initialState = { allPosts: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };
    default:
      return state;
  }
};
