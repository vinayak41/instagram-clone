import { getUserId, getUsername } from "../../utils/helper";
import {
  DISLIKE_POST,
  GET_POST_SUCCESS,
  LIKE_POST,
  POST_COMMENT,
  SET_ALL_POSTS,
} from "../typeConstants/postTypeConstants";

const initialState = { allPosts: [] };
export default (state = initialState, action) => {
  const userId = getUserId();
  const username = getUsername();
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
    case GET_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
      };
    case POST_COMMENT:
      updatedPosts = state.allPosts.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                commentBy: { username },
                text: action.payload.text,
                _id: action.payload.postId,
              },
            ],
          };
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
