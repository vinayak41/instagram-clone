import {
  CREATE_POST,
  DISLIKE_POST,
  GET_ALL_POSTS,
  LIKE_POST,
  SET_ALL_POSTS,
} from "../typeConstants/postTypeConstants";

export const getAllPosts = () => {
  return {
    type: GET_ALL_POSTS,
  };
};

export const setAllPosts = (posts) => {
  return {
    type: SET_ALL_POSTS,
    payload: posts,
  };
};

export const createPost = (data) => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};

export const likePost = (postId) => {
  return {
    type: LIKE_POST,
    payload: postId,
  };
};

export const dislikePost = (postId) => {
  return {
    type: DISLIKE_POST,
    payload: postId
  }
}