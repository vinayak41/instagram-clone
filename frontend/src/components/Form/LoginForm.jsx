import React, { useState } from "react";
import FormInput from "./FromInput/FormInput";
import "./form.scss";
import instagramLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormDevider from "./FormDevider/FormDevider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/userActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
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
    dispatch(loginRequest(formData));
  };
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        <FormInput
          type={"text"}
          placeHolder={"Username or email"}
          name={"usernameOrEmail"}
          onChange={handleInputChange}
        />
        <FormInput
          type={"password"}
          placeHolder={"Password"}
          onChange={handleInputChange}
          name={"password"}
        />
        <SubmitButton>Log In</SubmitButton>
        <FormDevider />
        <div className="otherOptions">
          <FcGoogle size={20} />
          <span>Login with google</span>
        </div>
        <div className="errorMessage">{error}</div>
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
