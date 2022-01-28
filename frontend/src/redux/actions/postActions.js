import { GET_ALL_POSTS, SET_ALL_POSTS } from "../typeConstants/postTypeConstants"

export const getAllPosts = () => {
  return {
    type: GET_ALL_POSTS,
  }
}

export const setAllPosts = (posts) => {
  return {
    type: SET_ALL_POSTS,
    payload: posts
  }
}