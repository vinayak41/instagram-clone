import React from "react";
import "./signup.scss";
import SignupForm from "../../components/Form/SignupForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { registred, isAuthenticated } = useSelector((state) => state.user);
  if (registred || isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="signup">
      <SignupForm />
    </div>
  );
};

export default Signup;
