import React from "react";
import "./formInput.scss"

const FromInput = ({ type, onChange, placeHolder }) => {
  return <input className="formInput" type={type} onChange={onChange} placeholder={placeHolder} />;
};

export default FromInput;
