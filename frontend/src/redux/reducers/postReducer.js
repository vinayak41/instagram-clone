import { getUserId } from "../../utils/helper";
import {
  DISLIKE_POST,
  LIKE_POST,
  SET_ALL_POSTS,
} from "../typeConstants/postTypeConstants";

const initialState = { allPosts: [] };
export default (state = initialState, action) => {
  const userId = getUserId();
  let updatedPosts;
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };
    case LIKE_POST:
      updatedPosts = state.allPosts.map((post) => {
        if (post._id === action.payload) {
          return { ...post, likes: [...post.likes, userId] };
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedPosts,
      };
    case DISLIKE_POST:
      updatedPosts = state.allPosts.map((post) => {
        if (post._id === action.payload) {
          return { ...post, likes: post.likes.filter((id) => id !== userId) };
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedPosts,
      };
    default:
      return state;
  }
};
