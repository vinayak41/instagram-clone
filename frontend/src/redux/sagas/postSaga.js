import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { POST_API } from "../../utils/api";
import { setAllPosts } from "../actions/postActions";
import { CREATE_POST, GET_ALL_POSTS } from "../typeConstants/postTypeConstants";

// function* signup(action) {
//   try {
//     const response = yield call(axios, {
//       method: "post",
//       url: `${USER_API}/register`,
//       data: action.payload,
//     });
//     yield put(signupSuccess());
//   } catch (error) {
//     if (error.response?.data?.message) {
//       yield put(signupFailed(error.response.data.message));
//     } else {
//       yield put(signupFailed("Signup failed"));
//     }
//   }
// }

function getToken() {
  return JSON.parse(localStorage.getItem("instagram-user")).token;
}

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

export default function* userSaga() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
  yield takeEvery(CREATE_POST, createPost);
}
