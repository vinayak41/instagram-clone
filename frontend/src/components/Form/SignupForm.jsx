import React from "react";
import FormInput from "./FromInput/FormInput";
import "./form.scss";
import instagramLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormDevider from "./FormDevider/FormDevider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../../redux/actions/userActions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const { error, message } = useSelector((state) => state.user);

  const handleInputChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupRequest(formData));
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        <FormInput
          type={"text"}
          placeHolder={"Email"}
          onChange={handleInputChange}
          name={"email"}
        />
        <FormInput
          type={"text"}
          placeHolder={"Full name"}
          onChange={handleInputChange}
          name={"fullname"}
        />
        <FormInput
          type={"text"}
          placeHolder={"Username"}
          onChange={handleInputChange}
          name={"username"}
        />
        <FormInput
          type={"password"}
          placeHolder={"Password"}
          onChange={handleInputChange}
          name={"password"}
        />
        <SubmitButton>Sign up</SubmitButton>
        <FormDevider />
        <div className="otherOptions">
          <FcGoogle size={20} />
          <span>Signup with google</span>
        </div>
        <div className="errorMessage">{error}</div>
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
