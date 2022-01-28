import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { POST_API } from "../../utils/api";
import { setAllPosts } from "../actions/postActions";
import {
  CREATE_POST,
  DISLIKE_POST,
  GET_ALL_POSTS,
  LIKE_POST,
  POST_COMMENT,
} from "../typeConstants/postTypeConstants";
import { getToken } from "../../utils/helper";

function* getAllPosts() {
  try {
    const token = yield call(getToken);
    console.log(token);
    const response = yield call(axios, {
      method: "GET",
      url: `${POST_API}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    yield put(setAllPosts(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* createPost(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(axios, {
      method: "POST",
      url: `${POST_API}`,
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}

function* likePost(action) {
  try {
    const token = yield call(getToken);
    yield call(axios, {
      method: "PATCH",
      url: `${POST_API}/like/${action.payload}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function* dislikePost(action) {
  try {
    const token = yield call(getToken);
    yield call(axios, {
      method: "PATCH",
      url: `${POST_API}/dislike/${action.payload}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function* postComment(action) {
  try {
    const token = yield call(getToken);
    yield call(axios, {
      method: "PATCH",
      url: `${POST_API}/comment/${action.payload.postId}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: { text: action.payload.text },
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
  yield takeEvery(CREATE_POST, createPost);
  yield takeEvery(LIKE_POST, likePost);
  yield takeEvery(DISLIKE_POST, dislikePost);
  yield takeEvery(POST_COMMENT, postComment);
}
