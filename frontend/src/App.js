import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import "./app.scss";
import Profile from "./pages/Profile/Profile";
import Navabr from "@components/Navbar/Navabr";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@redux/actions/userActions";
import LoginForm from "@components/Form/LoginForm";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("instagram-user"));
    if (user) {
      dispatch(loginSuccess(user));
    }
  }, []);
  return (
    <div>
      <Router>
        <Navabr />
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/:username" element={<Profile />} />{" "}
            </>
          ) : (
            <Route path="*" element={<LoginForm />} />
          )}
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
