import {
  CREATE_POST,
  DISLIKE_POST,
  GET_ALL_POSTS,
  GET_POST,
  GET_POST_SUCCESS,
  LIKE_POST,
  POST_COMMENT,
  SET_ALL_POSTS,
} from "../typeConstants/postTypeConstants";

export const getPosts = (data) => {
  return {
    type: GET_ALL_POSTS,
    payload: data
  };
};

export const setPosts = (posts) => {
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
    payload: postId,
  };
};

export const postComment = (data) => {
  return {
    type: POST_COMMENT,
    payload: data,
  };
};

export const getPost = (postId) => {
  return {
    type: GET_POST,
    payload: postId,
  };
};

export const getPostSuccess = (post) => {
  return {
    type: GET_POST_SUCCESS,
    payload: post,
  };
};
