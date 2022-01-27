import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Form/LoginForm";
import { loginSuccess } from "../../redux/actions/userActions";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("instagram-user"));
    if (user) {
      dispatch(loginSuccess(user));
    }
  }, []);
  return (
    <div className="home">
      {!isAuthenticated ? <LoginForm /> : <div>Feed</div>}
    </div>
  );
};

export default Home;
