export const getToken = () => {
  return JSON.parse(localStorage.getItem("instagram-user"))?.token;
};

export const getUserId = () => {
  return JSON.parse(localStorage.getItem("instagram-user"))?.user?.id;
}
