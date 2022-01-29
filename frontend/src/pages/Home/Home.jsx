import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Form/LoginForm";
import Modal from "../../components/Modal/Modal";
import Navabr from "../../components/Navbar/Navabr";
import Posts from "../../components/Posts/Posts";
import { getAllPosts } from "../../redux/actions/postActions";
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

  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getAllPosts())
    }
  }, [isAuthenticated])
  
  return (
    <div className="home">
      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <div className="main">
          <Navabr />
          <Posts />
        </div>
      )}
    </div>
  );
};

export default Home;
