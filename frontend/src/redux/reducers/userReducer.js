import {
  SIGNUP_REQUEST,
  SIGNUP_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
} from "../typeConstants/userTypeConstants";
const initialState = { isAuthenticated: false, username: null, error: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        error: null,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registred: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user.username,
        id: action.payload.user.id
      };
    default:
      return state;
  }
};
