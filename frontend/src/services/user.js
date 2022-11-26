import axios from "axios";
import { USER_API } from "../utils/api";

export const getUserProfile = async (username) => {
  const res = await axios.get(`${USER_API}/profile/${username}`);
  return res.data;
};
