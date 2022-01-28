import React from "react";
import "./formInput.scss";

const FromInput = ({ type, onChange, placeHolder, name }) => {
  return (
    <input
      className="formInput"
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
      name={name}
    />
  );
};

export default FromInput;
