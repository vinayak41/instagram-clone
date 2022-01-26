import React from "react";
import FormInput from "./FromInput/FormInput";
import "./form.scss";
import instagramLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormDevider from "./FormDevider/FormDevider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        <FormInput
          type={"text"}
          placeHolder={"Username or email"}
          onChange={() => {}}
        />
        <FormInput
          type={"password"}
          placeHolder={"Password"}
          onChange={() => {}}
        />
        <SubmitButton>Log In</SubmitButton>
        <FormDevider />
        <div className="otherOptions">
          <FcGoogle size={20} />
          <span>Login with google</span>
        </div>
      </form>
      <div className="formFooter">
        <p>
          <span>Don't have an account?</span> <Link to="/signup"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
