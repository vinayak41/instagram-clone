import { getUserId, getUsername } from "../../utils/helper";
import {
  DISLIKE_POST,
  GET_ALL_POSTS,
  GET_POST_SUCCESS,
  LIKE_POST,
  POST_COMMENT,
  SET_ALL_POSTS,
} from "../typeConstants/postTypeConstants";

const initialState = { feed: { posts: [], username: null }, loading: null };
export default (state = initialState, action) => {
  const userId = getUserId();
  const username = getUsername();
  let updatedPosts;
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        loading: true,
      };
    case SET_ALL_POSTS:
      return {
        ...state,
        feed: {
          ...action.payload,
          posts: [...state.feed.posts, ...action.payload.posts],
        },
        loading: false,
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
