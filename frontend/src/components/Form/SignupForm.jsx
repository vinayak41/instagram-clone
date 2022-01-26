import React from "react";
import FormInput from "./FromInput/FormInput";
import "./form.scss";
import instagramLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormDevider from "./FormDevider/FormDevider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        <FormInput type={"text"} placeHolder={"Email"} onChange={() => {}} />
        <FormInput
          type={"text"}
          placeHolder={"Full name"}
          onChange={() => {}}
        />
        <FormInput type={"text"} placeHolder={"Username"} onChange={() => {}} />
        <FormInput
          type={"password"}
          placeHolder={"Password"}
          onChange={() => {}}
        />
        <SubmitButton>Sign up</SubmitButton>
        <FormDevider />
        <div className="otherOptions">
          <FcGoogle size={20} />
          <span>Signup with google</span>
        </div>
      </form>
      <div className="formFooter">
        <p>
          <span>Have an account?</span> <Link to="/"> Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
